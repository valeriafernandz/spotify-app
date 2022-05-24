import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {HomeTitle} from './Home.styled';

function Home() {
    const [token, setToken] = useState("");
    const [data, setData] = useState([]);

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
        console.log("this is my token " + token);
        const fetchItems = async () => {
            const result = await axios.get(`https://api.spotify.com/v1/me/playlists`,{
            headers: {
                'Authorization': 'Bearer' + token
            }});
            setData(result.data);
            console.log("this is the result: "+ JSON.stringify(result.data));
        }
        fetchItems();
        console.log(data);
    },[]);
  return (
    <HomeTitle>Welcome back + {}</HomeTitle>
  )
}

export default Home