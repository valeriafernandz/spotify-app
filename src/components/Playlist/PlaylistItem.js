import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { SeeAllButton } from "../Button/Button.styled";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  ArtistHeader,
  ArtistName,
  ArtistTop,
  ArtistTopContainer,
  ArtistTopImg,
  ArtistTopText,
  Container,
} from "../Artists/Artists.styled";
import {
  DetailsContainer,
  PlaylistHeader,
  PlaylistImg,
  PlaylistName,
  PlaylistOwner,
  PlaylistTracks,
  TypePlaylist,
} from "./Playlist.styled";

const PlaylistItem = () => {
  const token = window.localStorage.token;
  const location = useLocation();
  const { item } = location.state;

  const playlistID = item.id;
  const playlistImg = item.images[0].url;
  const playlistName = item.name;
  const playlistOwner = item.owner.display_name;
  const numberTracks =  item.tracks.total;

  const navigate = useNavigate();

  const playlistURL = `https://api.spotify.com/v1/playlists/${playlistID}/tracks`;

  const [playlistItems, setPlaylistItems] = useState([]);

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };

  useEffect(() => {
    if (token) {
      const fetchPlaylistsItems = async () => {
        const result = await axios.get(`${playlistURL}`, { headers });
        console.log(playlistItems);
        setPlaylistItems(result.data);
      };
      fetchPlaylistsItems();
    }
  }, [token]);

  return (
    <>
      <SeeAllButton onClick={() => navigate(-1)}>&#8592; Go back</SeeAllButton>
      <Container>
          
        <PlaylistHeader>
          <PlaylistImg src={playlistImg} />
          <DetailsContainer>
            <TypePlaylist>Public playlist</TypePlaylist>
            <PlaylistName>{playlistName}</PlaylistName>
            <PlaylistOwner>{playlistOwner} &#9830; {numberTracks} songs</PlaylistOwner>
          </DetailsContainer>
        </PlaylistHeader>
        
        <PlaylistTracks>

        </PlaylistTracks>
      </Container>
    </>
  );
};

export default PlaylistItem;