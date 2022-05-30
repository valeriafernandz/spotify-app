import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Playlist from '../Playlist/Playlist';
import Header from '../Header/Header';
import Artists from '../Artists/Artists';

const Home = () => {
    let playlistURL = 'https://api.spotify.com/v1/me/playlists?limit=4';
    let artistsURL = 'https://api.spotify.com/v1/me/top/artists?limit=4';
    let showsURL = 'https://api.spotify.com/v1/me/shows';
    let profileURL = 'https://api.spotify.com/v1/me';

    const [token, setToken] = useState("");
    const [playlist, setPlaylist] = useState([]);
    const [artists, setArtists] = useState([]);
    const [show, setShow] = useState([]);
    const [asset, setAsset] = useState([]);

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    };

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
    
            window.location.hash = "";
            window.localStorage.setItem("token", token);
        }
        setToken(token);
    },[]);    

    useEffect(() => {
        if(token){
            const fetchProfile = async () => {
            const result = await axios.get(`${profileURL}`,{headers});
            setAsset(result.data);
            }
            fetchProfile();

            const fetchArtists = async () => {
                const result = await axios.get(`${artistsURL}`,{headers});
                setArtists(result.data);
            }
            fetchArtists();

            const fetchPlaylists = async () => {
                const result = await axios.get(`${playlistURL}`,{headers});
                setPlaylist(result.data);
            }
            fetchPlaylists();

            const fetchShows = async () => {
                const result = await axios.get(`${showsURL}`,{headers});
                setShow(result.data);
            }
            fetchShows();
        }

    }, [token]);
    
  return (
    <>
        <Header asset={asset} token={token}/>
        <Artists artists={artists}/>
        <Playlist playlist={playlist}/>
    </>
  )
}

export default Home;