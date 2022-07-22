import React from 'react';
import {ME_URL} from "../../constants/index";
import { useEffect, useState } from "react";
import {MenuContainer, MenuOptions} from "./Menu.styled";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { SeeAllButton, MenuOptionButton } from "../Button/Button.styled";
import axios from "axios";

const Menu = () => {
    const token = window.localStorage.token;

    const [asset, setAsset] = useState([]);


useEffect(() => {
        if (token) {
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
    },[token])
  return (
    <>
    <MenuContainer>
        <Header asset={asset} token={token} />
        <MenuOptions>
        <Link to="/home" state={{ asset }}>
            <MenuOptionButton>Home</MenuOptionButton>
        </Link>
        <Link to="/search" state={{ asset }}>
            <MenuOptionButton>Search</MenuOptionButton>
        </Link>
        <Link to="/artists" state={{ asset }}>
            <MenuOptionButton>Artists</MenuOptionButton>
        </Link>
        <Link to="/playlists" state={{ asset }}>
            <MenuOptionButton>Playlists</MenuOptionButton>
        </Link>
        <Link to="/shows" state={{ asset }}>
            <MenuOptionButton>Shows</MenuOptionButton>
        </Link>
        </MenuOptions>
    </MenuContainer>

    </>
  )
}

export default Menu;