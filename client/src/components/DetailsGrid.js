import { StyledDetails } from '../styles';

const DetailsGrid = ({ popularity }) => (
  <>
    {popularity ? (
        <StyledDetails>
            <div className="container">
                <div className="box">
                    <div className="shadow"></div>
                    <div className="content">
                        <div className="label">Popularity
                            <img src="/images/question_icon.png" title="The higher the percentage, the more popular the track is" 
                                alt="Popularity" className="icon" />
                        </div>
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
            </div>
        </StyledDetails>
    ) : (
      <p className="empty-notice">No audio features to show</p>
    )}
  </>
);

export default DetailsGrid;