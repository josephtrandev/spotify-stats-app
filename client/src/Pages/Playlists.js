import { useState, useEffect } from 'react';
import axios from 'axios';
import { catchErrors } from '../utils';
import { getCurrentUserPlaylists } from '../spotify';
import { Loader, PlaylistsGrid, SectionWrapper } from '../components';

const Playlists = () => {
    const [playlistsData, setPlaylistsData] = useState(null);
    const [playlists, setPlaylists] = useState(null);
    
    useEffect(() => {
      const fetchData = async () => {
        const userPlaylists = await getCurrentUserPlaylists();
        setPlaylistsData(userPlaylists.data);
      };
  
      catchErrors(fetchData());
    }, []);

    // When playlistsData updates, check if there are more playlists to fetch
    // then update the state variable
    useEffect(() => {
        if (!playlistsData) {
            return;
        }

        // Playlist endpoint only returns 20 playlists at a time so
        // make sure we get ALL playlists by fetching next set of playlists
        const fetchMoreData = async () => {
            if (playlistsData.next) {
                const { data } = await axios.get(playlistsData.next);
                setPlaylistsData(data);
            }
        };

        // Use functional update to update playlists state variable
        // to avoid including playlists as a dependency for this hook
        // and creating an infinite loop
        setPlaylists(playlists => ([
            ...playlists ? playlists : [],
            ...playlistsData.items
        ]));

        // Fetch next set of playlists as needed
        catchErrors(fetchMoreData());

    }, [playlistsData]);

    return (
        <main>
            <SectionWrapper title="Playlists" breadcrumb="true">
                {playlists ? (
                    <PlaylistsGrid playlists={playlists} />
                ) : (
                    <Loader />
                )} 
            </SectionWrapper>
        </main>
    )
}

export default Playlists;