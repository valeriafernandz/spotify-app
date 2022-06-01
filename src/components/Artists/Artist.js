import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import { SeeAllButton } from "../Button/Button.styled";
import {
  ArtistHeader,
  ArtistName,
  ArtistTop,
  ArtistTopContainer,
  ArtistTopImg,
  ArtistTopText,
  Container,
} from "./Artists.styled";

const Artist = () => {
  const token = window.localStorage.token;
  const location = useLocation();
  const { item, asset} = location.state;

  const artistID = item.id;
  const country = asset.country;

  const navigate = useNavigate();

  const artistURL = `https://api.spotify.com/v1/artists/${artistID}`;
  const artistTopURL = `https://api.spotify.com/v1/artists/${artistID}/top-tracks?market=${country}`;

  const [artist, setArtist] = useState([]);
  const [artistTop, setArtistTop] = useState([]);

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  useEffect(() => {
    if (token) {
      const fetchArtist = async () => {
        const result = await axios.get(`${artistURL}`, { headers });
        setArtist(result.data);
      };
      fetchArtist();
      const fetchArtistTop = async () => {
        const result = await axios.get(`${artistTopURL}`, { headers });
        setArtistTop(result.data);
        console.log(result.data);
      };
      fetchArtistTop();
    }
  }, [token]);

  return (
    <>
        <SeeAllButton onClick={() => navigate(-1)}>&#8592; Go back</SeeAllButton>
     
      <Container key={artist.id}>
        <ArtistHeader
          url={
            !!artistID && artist?.images?.length ? artist.images[0].url : null
          }
        >
          <ArtistName>{artist.name}</ArtistName>
        </ArtistHeader>
        {artistTop?.tracks
          ? artistTop.tracks.map((track) => (
              <ArtistTop>
                <ArtistTopContainer>
                  <ArtistTopContainer>
                    <ArtistTopImg src={track.album.images[0].url} />
                    <ArtistTopText>{track.name}</ArtistTopText>
                  </ArtistTopContainer>
                </ArtistTopContainer>
              </ArtistTop>
            ))
          : null}
      </Container>
    </>
  );
};

export default Artist;
