import axios from 'axios';
import { createContext, ReactElement, useContext, useState, useEffect } from 'react';
import { ME_URL } from '../constants';

const useSpotifyAPI = () => {
  const [token, setToken] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [artists, setArtists] = useState([]);
  const [show, setShow] = useState([]);
  const [asset, setAsset] = useState([]);

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };

  const fetchProfile = async () => {
    const result = await axios.get(`${ME_URL}`, { headers });
    setAsset(result.data);
  };
  fetchProfile();

}



  