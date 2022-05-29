import React from 'react'
import {LoginTitle, TextSecondary} from './Login.styled';
import {LoginButton} from '../Button/Button.styled';
import Header from '../Header/Header';

function LoginPage(){
    const CLIENT_ID = "470d32d20ecb43a693cee722cf68c405";
    const REDIRECT_URI = "http://localhost:3000/home";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPES = [
      "user-read-email",
      "user-read-private",
      "user-top-read",
      "ugc-image-upload",
      "user-read-recently-played",
      "user-top-read",
      "user-read-playback-position",
      "user-read-playback-state","user-modify-playback-state",
      "user-read-currently-playing",
      "app-remote-control",
      "streaming",
      "playlist-modify-public",
      "playlist-modify-private",
      "playlist-read-private",
      "playlist-read-collaborative",
      "user-follow-modify",
      "user-follow-read",
      "user-library-modify",
      "user-library-read"
    ];
    
  return (
    <div className="LoginPage">
            <Header/>
            <LoginTitle>Welcome</LoginTitle>
            <TextSecondary>Login with spotify</TextSecondary>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES.join("%20")}`}>
                <LoginButton>Login</LoginButton>
            </a>
    </div>
    
  )
}

export default LoginPage