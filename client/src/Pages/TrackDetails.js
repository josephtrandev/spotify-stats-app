import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { catchErrors } from '../utils';
import { getTrackById } from '../spotify';
import { Loader } from '../components';
import { StyledHeader } from '../styles';

const TrackDetails = () => {
    const { id } = useParams();
    const [trackDetails, setTrackDetails] = useState(null);

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
                        {trackDetails.album.images && trackDetails.album.images[0].url &&
                        (
                            <img className="header__img" src={trackDetails.album.images[0].url} alt="Album Artwork"/>
                        )}
                        <div>
                            <div className="header__overline">{trackDetails.album.album_type}</div>
                            <h1 className="header__name">{trackDetails.name}</h1>
                            <p className="header__meta">
                                <span>
                                    {trackDetails.album.total_tracks} {`song${trackDetails.album.total_tracks !== 1 ? 's' : ''}`}
                                </span>
                            </p>
                        </div>
                    </div>
                </StyledHeader>
            </>
        ) : (
            <Loader />
        )}
        </main>
    );
}

export default TrackDetails;