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
import './App.css';

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
        const { data } = await getCurrentUserProfile();
        setProfile(data);
    }

    catchErrors(fetchData());

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!token? (
          <a
            className="App-link"
            href="http://localhost:8888/login"
          >
            Log in to Spotify
          </a>
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
