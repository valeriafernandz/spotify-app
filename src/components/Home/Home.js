import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Playlist from '../Playlist/Playlist';
import Header from '../Header/Header';
import Artists from '../Artists/Artists';

const Home = () => {
    const playlistURL = 'https://api.spotify.com/v1/me/playlists?limit=4';
    const artistsURL = 'https://api.spotify.com/v1/me/top/artists?limit=4';
    const showsURL = 'https://api.spotify.com/v1/me/shows';

    const [token, setToken] = useState("");
    const [playlist, setPlaylist] = useState([]);
    const [artists, setArtists] = useState([]);
    const [show, setShow] = useState([]);

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
            const fetchArtists = async () => {
            const result = await axios.get(`${artistsURL}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }});
            setArtists(result.data);
            }
            fetchArtists();
            
        }
    },[token]);

    useEffect(()=>{
        if(token){
            
            const fetchPlaylists = async () => {
            const result = await axios.get(`${playlistURL}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }});
            setPlaylist(result.data);
            }
            fetchPlaylists();
        }
    },[token]);

   useEffect(()=>{
        if(token){
            const fetchShows = async () => {
            const result = await axios.get(`${showsURL}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }});
            setShow(result.data);
            }
            fetchShows();
        }
    },[token]);
    
  return (
    <>
        <Header token={token}/>
        <Artists artists={artists}/>
        <Playlist playlist={playlist}/>
    </>
  )
}

export default Home;