# Spotify Stats

## Overview
This project aims to utilize the Spotify API to retrieve and display profile data for a user. The application will allow users to authenticate with their Spotify account to view listening information such as their top songs, top artists, and more.

> :warning: **IMPORTANT NOTICE** :warning:
>
> Spotify has announced the deprecation of several key features in their Web API, effective **November 27th, 2024**.
> 
> Features in this app that utilized the Spotify API track audio features (energy, danceability, etc.) will no longer be functional
> which means sorting playlist tracks by audio features and viewing each track's individual audio features will not be possible.
>
> UPDATE: Sorting playlist tracks by popularity and duration has been implemented and will replace sorting by audio features.
> 
> :link: For more information, see their official announcement on the Spotify community forum: [Changes to Web API](https://community.spotify.com/t5/Spotify-for-Developers/Changes-to-Web-API/td-p/6540414).
>
> :link: Direct link to Spotify blog post: [Introducing some changes to our Web API](https://developer.spotify.com/blog/2024-11-27-changes-to-the-web-api)

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
![Top Artists Screenshot](/images/topartists.png)
![Top Tracks Screenshot](/images/toptracks.png)
![Playlist Screenshot](/images/playlist.png)

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
