import React from "react";

const Home = ({ profile, logout }) => {
    return (
        <div>
            <button onClick={logout}>Log Out</button>

            {profile ? (
                <div>
                <h1>Welcome {profile.display_name}.</h1>
                <p>{profile.followers.total} Followers</p>
                {profile.images.length && profile.images[0].url && (
                    <img src={profile.images[0].url} alt="Avatar" />
                )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Home;