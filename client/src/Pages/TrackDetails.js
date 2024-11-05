import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { catchErrors } from '../utils';
import { getTrackById } from '../spotify';
import { Loader, SectionWrapper } from '../components';
import { StyledHeader, StyledTrackList } from '../styles';

const TrackDetails = () => {
    const { id } = useParams();
    const [trackDetails, setTrackDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async() => {
            const { data } = await getTrackById(id);
            setTrackDetails(data);
        };

        console.log(trackDetails);

        catchErrors(fetchData());
    }, [id]);

    return (
        <main>
        {trackDetails ? (
            <>
                <StyledHeader>
                    <div className="header__inner">
                        {trackDetails.album.images.length && trackDetails.album.images[0].url &&
                        (
                            <img className="header__img" src={trackDetails.album.images[0].url} alt="Album Artwork"/>
                        )}
                        <div>
                            <div className="header__overline">
                                {trackDetails.artists.map((artist, i) => (
                                    <span key={i}>
                                        {artist.name}{i !== trackDetails.artists.length - 1 && ', '}
                                    </span>
                                ))}
                            </div>
                            <h1 className="header__name">{trackDetails.name}</h1>
                            <p className="header__meta">
                                <span>{trackDetails.album.release_date}</span>
                                <span>
                                    {trackDetails.album.total_tracks} {`song${trackDetails.album.total_tracks !== 1 ? 's' : ''}`}
                                </span>
                            </p>
                        </div>
                    </div>
                </StyledHeader>

                <main>
                    <SectionWrapper>
                        <button onClick={() => navigate(-1)}>Go Back</button>

                    </SectionWrapper>
                </main>
            </>
        ) : (
            <Loader />
        )}
        </main>
    );
}

export default TrackDetails;