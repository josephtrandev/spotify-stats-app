import { StyledDetails } from '../styles';
import { formatPercentage } from '../utils';

const DetailsGrid = ({ popularity, danceability, energy, valence, tempo }) => (
  <>
    {popularity && danceability && energy && valence && tempo ? (
        <StyledDetails>
            <div className="container">
                <div className="box">
                    <div className="shadow"></div>
                    <div className="content">
                        <div className="label">Popularity</div>
                        <div className="percent" style={{ "--num": popularity }}>
                            <div className="dot"></div>
                            <svg>
                                <circle className="highlight" cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>{popularity}<span>%</span></h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="shadow"></div>
                    <div className="content">
                        <div className="label">Danceability</div>
                        <div className="percent" style={{ "--num": formatPercentage(danceability) }}>
                            <div className="dot"></div>
                            <svg>
                                <circle className="highlight" cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>{formatPercentage(danceability)}<span>%</span></h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="shadow"></div>
                    <div className="content">
                        <div className="label">Energy</div>
                        <div className="percent" style={{ "--num": formatPercentage(energy) }}>
                            <div className="dot"></div>
                            <svg>
                                <circle className="highlight" cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>{formatPercentage(energy)}<span>%</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="box">
                    <div className="shadow"></div>
                    <div className="content">
                        <div className="label">Valence</div>
                        <div className="percent" style={{ "--num": formatPercentage(valence) }}>
                            <div className="dot"></div>
                            <svg>
                                <circle className="highlight" cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>{formatPercentage(valence)}<span>%</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>Tempo: {Math.trunc(tempo)} BPM</div>
        </StyledDetails>
    ) : (
      <p className="empty-notice">No audio features to show</p>
    )}
  </>
);

export default DetailsGrid;