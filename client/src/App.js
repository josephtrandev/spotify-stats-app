import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { accessToken, logout, getCurrentUserProfile } from './spotify';
import { catchErrors } from './utils';
import Home from './Pages/Home';
import TopTracks from './Pages/TopTracks';
import TopArtists from './Pages/TopArtists';
import Playlists from './Pages/Playlists';
import PlaylistDetails from './Pages/PlaylistDetails';
import styled from 'styled-components/macro';
import { GlobalStyle } from './styles';

const StyledLoginButton = styled.a`
  background-color: var(--green);
  color: var(--white);
  padding: 10px 20px;
  margin: 20px auto;
  border-radius: 30px;
  display: inline-block;
`;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      if (accessToken) {
        const { data } = await getCurrentUserProfile();
        setProfile(data);
      }
    }

    catchErrors(fetchData());

  }, []);

  return (
    <div className="App">
      <GlobalStyle />

      <header className="App-header">
        {!token? (
          <StyledLoginButton
            className="App-link"
            href="http://localhost:8888/login"
          >
            Log in to Spotify
          </StyledLoginButton>
        ) : (
          <Router>
            <ScrollToTop />

            <Routes>
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-tracks" element={<TopTracks />} />
              <Route path="/playlists/:id" element={<PlaylistDetails />} />
              <Route path="/playlists" element={<Playlists />} />
              <Route path="/" element={<Home profile={profile} logout={logout}/>} />
            </Routes>
          </Router>
        )}
      </header>
    </div>
  );
}

export default App;
