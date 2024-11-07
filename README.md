# Spotify Stats

## Overview
This project aims to utilize the Spotify API to retrieve and display song data for a user. The application will allow users to authenticate with their Spotify account and view listening information such as top songs with track names, artists, and more.

## Table of Contents

- [Features](#features)
- [Preview Images](#preview-images)
- [Installation](#local-installation-&-setup)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features
- User authentication with Spotify
- Display user's top songs and artists with time range options
- Allow users to see their playlists
- Sort songs by different track features (danceability, energy, etc.)
- Display detailed info about songs

## Preview Images
[![Top Artists Screenshot](/images/topartists.png)]
[![Top Tracks Screenshot](/images/toptracks.png)]
[![Playlist Screenshot](/images/playlist.png)]

## Local Installation & Setup

1. Register a Spotify App in your [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) and add `http://localhost:8888/callback` as a Redirect URI in the app settings

2. Create a `.env` file at the root of the project based on `.env.example` and add your unique `CLIENT_ID` and `CLIENT_SECRET` from the Spotify dashboard

3. Ensure [nvm](https://github.com/nvm-sh/nvm) and [npm](https://www.npmjs.com/) are installed globally

4. Install the correct version of Node

    ```shell
    nvm install
    ```

5. Install dependencies

    ```shell
    npm install
    ```

6. Run the React app on <http://localhost:3000> and the Node server on <http://localhost:8888>

    ```shell
    npm start
    ```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
