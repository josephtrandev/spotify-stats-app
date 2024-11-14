import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { catchErrors, formatDuration } from '../utils';
import { getTrackById, getAudioFeaturesForSingle } from '../spotify';
import { DetailsGrid, Loader, SectionWrapper } from '../components';
import { StyledHeader } from '../styles';

const TrackDetails = () => {
    const { id } = useParams();
    const [trackDetails, setTrackDetails] = useState(null);
    const [audioFeatures, setAudioFeatures] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async() => {
            const { data } = await getTrackById(id);
            const { data: audioFeatures } = await getAudioFeaturesForSingle(id);
            setTrackDetails(data);
            setAudioFeatures(audioFeatures);
        };

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
                                <span>Released: {trackDetails.album.release_date}</span>
                                <span>Song Length: {formatDuration(trackDetails.duration_ms)}</span>
                            </p>
                        </div>
                    </div>
                </StyledHeader>

                <main>
                    <SectionWrapper>
                        <button onClick={() => navigate(-1)}>Go Back</button>
                        <DetailsGrid popularity={trackDetails.popularity} danceability={audioFeatures.danceability}
                            energy={audioFeatures.energy} valence={audioFeatures.valence} tempo={audioFeatures.tempo} />                        
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