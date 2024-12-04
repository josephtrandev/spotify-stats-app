import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { catchErrors } from '../utils';
import { getPlaylistById } from '../spotify';
import { Loader, SectionWrapper, TrackList } from '../components';
import { StyledHeader, StyledDropdown } from '../styles';

const PlaylistsDetails = () => {
    const { id } = useParams();
    const [playlist, setPlaylist] = useState(null);
    const [tracksData, setTracksData] = useState(null);
    const [tracks, setTracks] = useState(null);
    const [sortValue, setSortValue] = useState('');
    const sortOptions = ['popularity', 'duration'];

    useEffect(() => {
        const fetchData = async() => {
            const { data } = await getPlaylistById(id);
            setPlaylist(data);
            setTracksData(data.tracks);
        };

        catchErrors(fetchData());
    }, [id]);

    // When tracksData updates, compile arrays of tracks and audioFeatures
    useEffect(() => {
        if (!tracksData) {
            return;
        }

        // When tracksData updates, check if there are more tracks to fetch
        // then update the state variable
        const fetchMoreData = async () => {
            if (tracksData.next) {
                const { data } = await axios.get(tracksData.next);
                setTracksData(data);
            }
        };

        setTracks(tracks => ([
            ...tracks ? tracks : [],
            ...tracksData.items
        ]));

        catchErrors(fetchMoreData());
    }, [tracksData]);

    const tracksWithMetadata = useMemo(() => {
        if (!tracks) {
            return null;
        }
    
        return tracks
            .filter(({ track }) => track !== null) // Check for unavailable tracks
            .map(({ track }) => ({
                ...track,
                duration: track.duration_ms,
                popularity: track.popularity,
            }));
    }, [tracks]);

    // Sort tracks by audio feature to be used in template
    const sortedTracks = useMemo(() => {
        if (!tracksWithMetadata) {
            return null;
        }

        return [...tracksWithMetadata].sort((a, b) => {
            if (!sortValue) return 0;

            return b[sortValue] - a[sortValue];
        });
    }, [sortValue, tracksWithMetadata]);

    return (
        <main>
        {playlist ? (
            <>
                <StyledHeader>
                    <div className="header__inner">
                        {playlist.images.length && playlist.images[0].url &&
                        (
                            <img className="header__img" src={playlist.images[0].url} alt="Playlist Artwork"/>
                        )}
                        <div>
                            <div className="header__overline">Playlist</div>
                            <h1 className="header__name">{playlist.name}</h1>
                            <p className="header__meta">
                                {playlist.followers.total ? (
                                    <span>
                                        {playlist.followers.total} {`follower${playlist.followers.total !== 1 ? 's' : ''}`}
                                    </span>
                                ) : null}
                                <span>
                                    {playlist.tracks.total} {`song${playlist.tracks.total !== 1 ? 's' : ''}`}
                                </span>
                            </p>
                        </div>
                    </div>
                </StyledHeader>

                <main>
                    <SectionWrapper title="Playlist" breadcrumb="true">
                        <StyledDropdown active={!!sortValue}>
                            <label className="sr-only" htmlFor="order-select">Sort tracks</label>
                            <select name="track-order" id="order-select" onChange={e => setSortValue(e.target.value)}>
                                <option value="">Sort tracks</option>
                                {sortOptions.map((option, i) => (
                                    <option value={option} key={i}>
                                        {`${option.charAt(0).toUpperCase()}${option.slice(1)}`}
                                    </option>
                                ))}
                            </select>
                        </StyledDropdown>

                        {sortedTracks && (
                            <TrackList tracks={sortedTracks} />
                        )}
                    </SectionWrapper>
                </main>
            </>
        ) : (
            <Loader />
        )}
        </main>
    );
}

export default PlaylistsDetails;