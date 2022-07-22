import React from "react";
import { PLAYLIST_URL } from "../../constants/index";
import { useEffect, useState } from "react";
import axios from "axios";
import { SeeAllButton } from "../Button/Button.styled";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Container } from "../Artists/Artists.styled";
import {
  DetailsContainer,
  PlaylistHeader,
  PlaylistImg,
  PlaylistName,
  PlaylistOwner,
  PlaylistTracks,
  TracksTable,
  TracksTableTD,
  TracksTableTH,
  TracksTableTR,
  TypePlaylist,
} from "./Playlist.styled";

const Playlist = () => {
  const token = window.localStorage.token;
  const location = useLocation();
  const { item } = location.state;

  const playlistID = item.id;
  const playlistImg = item.images[0].url;
  const playlistName = item.name;
  const playlistOwner = item.owner.display_name;
  const numberTracks = item.tracks.total;

  const navigate = useNavigate();

  const [playlistItems, setPlaylistItems] = useState([]);

  useEffect(() => {
    if (token) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };
      const fetchPlaylistsItems = async () => {
        const result = await axios.get(`${PLAYLIST_URL}/${playlistID}/tracks`, {
          headers,
        });
        setPlaylistItems(result.data);
        console.log(playlistItems);
      };
      fetchPlaylistsItems();
    }
  }, [token]);

  return (
    <>
      
      <Container>
      <SeeAllButton onClick={() => navigate(-1)}>&#8592; Go back</SeeAllButton>
        <PlaylistHeader>
          <PlaylistImg src={playlistImg} />
          <DetailsContainer>
            <TypePlaylist>Public playlist</TypePlaylist>
            <PlaylistName>{playlistName}</PlaylistName>
            <PlaylistOwner>
              {playlistOwner} &#9830; {numberTracks} songs
            </PlaylistOwner>
          </DetailsContainer>
        </PlaylistHeader>

        <PlaylistTracks>
          <TracksTable>
            <TracksTableTR>
              <TracksTableTH>#</TracksTableTH>
              <TracksTableTH>Title</TracksTableTH>
              <TracksTableTH>Album</TracksTableTH>
              <TracksTableTH>Duration</TracksTableTH>
            </TracksTableTR>
            {playlistItems?.items && playlistItems.items.map((item) => (
              <TracksTableTR key={item.track.id}>
              <TracksTableTD>{item.track.track_number}</TracksTableTD>
              <TracksTableTD>{item.track.name}</TracksTableTD>
              <TracksTableTD>{item.track.album.name}</TracksTableTD>
              <TracksTableTD>{(item.track.duration_ms/60000).toFixed(2)} </TracksTableTD>
            </TracksTableTR>
            ))}
            
          </TracksTable>
        </PlaylistTracks>
      </Container>
    </>
  );
};

export default Playlist;
