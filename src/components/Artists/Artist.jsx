import React from "react";
import { ARTIST_URL } from "../../constants/index";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
      <SeeAllButton onClick={() => navigate(-1)}>&#8592; Go back</SeeAllButton>

      <Container key={artist.id}>
        <ArtistHeader
          url={
            !!artistID && artist?.images?.length ? artist.images[0].url : null
          }
        >
          <ArtistName>{artist.name}</ArtistName>
        </ArtistHeader>
        {artistTop?.tracks &&
          artistTop.tracks.map((track) => (
            <ArtistTop>
              <ArtistTopContainer>
                <ArtistTopContainer>
                  <ArtistTopImg src={track.album.images[0].url} />
                  <ArtistTopText>{track.name}</ArtistTopText>
                </ArtistTopContainer>
              </ArtistTopContainer>
            </ArtistTop>
          ))}
      </Container>
    </>
  );
};

export default Artist;
