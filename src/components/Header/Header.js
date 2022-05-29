import React from 'react'
import { HeaderLogo, HeaderContainer, HeaderTitle, Profile} from './Header.styled'
import whiteLogo from '../../assets/images/logo-white.png';
import {useEffect, useState} from 'react';
import axios from 'axios';

const Header = ({token}) => {
  const profileURL = 'https://api.spotify.com/v1/me';
  const [asset, setAsset] = useState([]);

  useEffect(()=>{
    if(token){
        const fetchProfile = async () => {
        const result = await axios.get(`${profileURL}`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }});
        setAsset(result.data);
        }
        fetchProfile();
    }
},[token]);

  return (
    <>
        <HeaderContainer>
            <HeaderLogo src={whiteLogo}/>
            <HeaderTitle>Spotify App Aesthetic</HeaderTitle> 
            <Profile url={asset.images[0].url}/>
        </HeaderContainer>
            
    </>
  )
}

export default Header