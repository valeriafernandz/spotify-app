import React from "react";
import { ARTIST_URL } from "../../constants/index";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SeeAllButton } from "../Button/Button.styled";
import {
  ArtistHeader,
  ArtistInfoContainer,
  ArtistName,
  ArtistTop,
  ArtistTopContainer,
  ArtistTopImg,
  ArtistTopText,
  Container,
  TableImg,
} from "./Artists.styled";
import { TracksTable, TracksTableTH, TracksTableTR, TracksTableTD } from "../Playlists/Playlist.styled";

const Artist = () => {
  const token = window.localStorage.token;
  const location = useLocation();
  const { item, asset } = location.state;

  const artistID = item.id;
  const country = asset.country;

  const navigate = useNavigate();

  const [artist, setArtist] = useState([]);
  const [artistTop, setArtistTop] = useState([]);

  useEffect(() => {
    if (token) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };

      const fetchArtist = async () => {
        const result = await axios.get(`${ARTIST_URL}/${artistID}`, {
          headers,
        });
        setArtist(result.data);
      };
      fetchArtist();
      const fetchArtistTop = async () => {
        const result = await axios.get(
          `${ARTIST_URL}/${artistID}/top-tracks?market=${country}`,
          { headers }
        );
        setArtistTop(result.data);
      };
      fetchArtistTop();
    }
  }, [token]);

  return (
    <>
      <Container key={artist.id}>
      <SeeAllButton onClick={() => navigate(-1)}>&#8592; Go back</SeeAllButton>
        <ArtistHeader
          url={
            !!artistID && artist?.images?.length ? artist.images[0].url : null
          }
        >
          <ArtistName>{artist.name}</ArtistName>
        </ArtistHeader>

        <ArtistInfoContainer>
          <ArtistTop>
        <TracksTable>
              <TracksTableTR>
                <TracksTableTH>#</TracksTableTH>
                <TracksTableTH>Title</TracksTableTH>
                <TracksTableTH>Album</TracksTableTH>
                <TracksTableTH>Duration</TracksTableTH>
              </TracksTableTR>
              {artistTop?.tracks &&
          artistTop.tracks.map((track) => (
            <TracksTableTR>
              <TracksTableTD><TableImg src={track.album.images[0].url}></TableImg></TracksTableTD>
              <TracksTableTD>{track.name}</TracksTableTD>
              <TracksTableTD>{track.album.name}</TracksTableTD>
              <TracksTableTD>{(track.duration_ms/60000).toFixed(2)}</TracksTableTD>
            </TracksTableTR>
            ))}
        </TracksTable>
        </ArtistTop>
          </ArtistInfoContainer>
      </Container>
    </>
  );
};

export default Artist;
