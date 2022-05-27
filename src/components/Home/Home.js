import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Playlist from '../Playlist/Playlist';
import Header from '../Header/Header';
import Artists from '../Artists/Artists';

const Home = () => {
    const [token, setToken] = useState("");
    const [data, setData] = useState([]);
    const [artist, setArtist] = useState([]);

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
    
            window.location.hash = "";
            window.localStorage.setItem("token", token);
        }
        setToken(token);
    }, []);

    useEffect(()=>{
        if(token){
            console.log("this is my token " + token);
            const fetchArtists = async () => {
            const result = await axios.get(`https://api.spotify.com/v1/me/top/artists`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }});
            setArtist(result.artist);
            }
            fetchArtists();
            console.log(artist);
        }
    },[token]);

    useEffect(()=>{
        if(token){
            
            const fetchPlaylists = async () => {
            const result = await axios.get(`https://api.spotify.com/v1/me/playlists`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }});
            setData(result.data);
            }
            fetchPlaylists();
            console.log(data);
        }
    },[token]);
    
  return (
    <>
        <Header/>
        <Artists artist={artist}/>
    </>
  )
}

export default Home;