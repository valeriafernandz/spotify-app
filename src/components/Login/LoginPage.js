import React from 'react'
import {LoginContainer, LoginTitle, TextSecondary} from './Login.styled';
import {LoginButton} from '../Button/Button.styled';
import Home from '../Home/Home';
import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from 'axios';


function LoginPage(){
    const CLIENT_ID = "470d32d20ecb43a693cee722cf68c405";
    const REDIRECT_URI = "http://localhost:3000/home";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    

    

  return (
    <div className="LoginPage">
            <LoginTitle>Welcome</LoginTitle>
            <TextSecondary>Login with spotify</TextSecondary>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                <LoginButton>Login</LoginButton>
            </a>
    </div>
    
  )
}

export default LoginPage