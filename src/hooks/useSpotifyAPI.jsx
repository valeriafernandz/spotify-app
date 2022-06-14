import axios from 'axios';
import { createContext, ReactElement, useContext, useState } from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { ME_URL } from '../constants';

const fetchProfile = async () => {
  const [token, setToken] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [artists, setArtists] = useState([]);
  const [show, setShow] = useState([]);
  const [asset, setAsset] = useState([]);
  
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
    const result = await axios.get(`${ME_URL}`, { headers });
    setAsset(result.data);
  };
  fetchProfile();


  