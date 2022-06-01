import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  TopArtistShape,
  TopArtistCardCaption,
  TopArtistImg,
  TopArtistsContainer,
} from "./Artists.styled";
import { SeeAllButton } from "../Button/Button.styled";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Artists = () => {
  let artistsURL = "https://api.spotify.com/v1/me/top/artists";
  const token = window.localStorage.token;

  const location = useLocation();
  const { asset } = location.state;

  const navigate = useNavigate();

  const [artists, setArtists] = useState([]);

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  useEffect(() => {
    if (token) {
      const fetchArtists = async () => {
        const result = await axios.get(`${artistsURL}`, { headers });
        setArtists(result.data);
      };
      fetchArtists();
    }
  }, [token]);

  return (
    <>
      
        <SeeAllButton onClick={() => navigate(-1)}>&#8592; Go back</SeeAllButton>
     
      <Container>
          <TopArtistsContainer>
            {artists?.items
              ? artists.items.map((item) => (
                <Link to="/artists/artist" state={{item,asset,artists}}>
                  <TopArtistShape key={item.id}>
                    <TopArtistImg src={item.images[0].url} />
                    <TopArtistCardCaption>{item.name}</TopArtistCardCaption>
                  </TopArtistShape>
                  </Link>
                ))
              : null}
          </TopArtistsContainer>
        
      </Container>
    </>
  );
};

export default Artists;
