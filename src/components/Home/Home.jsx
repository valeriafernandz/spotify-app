import React from "react";
import {
  ARTISTS_URL,
  PLAYLISTS_URL,
  SHOWS_URL,
  ME_URL,
} from "../../constants/index";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import {
  Container,
  Title,
  TopArtistShape,
  TopArtistCardCaption,
  TopArtistImg,
  TopArtistsContainer,
} from "../Artists/Artists.styled";
import {
  PlaylistCardContainer,
  PlaylistCard,
  PlaylistCardImg,
  CardTextPrimary,
  CardTextSecondary,
} from "../Playlists/Playlist.styled";
import {
  CardContainer,
  CardTerciary,
  CardTerciaryContainer,
  CardTerciaryImg,
  CardTerciaryText,
} from "../Shows/Shows.styled";
import { SeeAllButton } from "../Button/Button.styled";

const Home = () => {
  const [token, setToken] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [artists, setArtists] = useState([]);
  const [show, setShow] = useState([]);
  const [asset, setAsset] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

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

      const fetchArtists = async () => {
        const result = await axios.get(`${ARTISTS_URL}?limit=4`, { headers });
        setArtists(result.data);
      };
      fetchArtists();

      const fetchPlaylists = async () => {
        const result = await axios.get(`${PLAYLISTS_URL}?limit=4`, { headers });
        setPlaylist(result.data);
      };
      fetchPlaylists();

      const fetchShows = async () => {
        const result = await axios.get(`${SHOWS_URL}`, { headers });
        setShow(result.data);
      };
      fetchShows();
    }
  }, [token]);

  return (
    <>
      <Header asset={asset} token={token} />
      <Container>
        <Title>
          Top Artists
          <Link to="/artists" state={{ asset }}>
            <SeeAllButton>See all</SeeAllButton>
          </Link>
        </Title>

        <TopArtistsContainer>
          {artists?.items &&
            artists.items.map((item) => (
              <Link to="/artists/artist" state={{ item, asset }}>
                <TopArtistShape key={item.id}>
                  <TopArtistImg src={item.images[0].url} />
                  <TopArtistCardCaption>{item.name}</TopArtistCardCaption>
                </TopArtistShape>
              </Link>
            ))}
        </TopArtistsContainer>

        <Title>
          Top Playlists
          <Link to="/playlists">
            <SeeAllButton>See all</SeeAllButton>
          </Link>
        </Title>
        <PlaylistCardContainer>
          {playlist?.items &&
            playlist.items.map((item) => (
              <PlaylistCard key={item.id}>
                <div className="card-container">
                  <PlaylistCardImg src={item.images[0].url} alt="" />
                  <CardTextPrimary>{item.name}</CardTextPrimary>
                  <CardTextSecondary>
                    Owner: {item.owner.display_name}
                  </CardTextSecondary>
                </div>
              </PlaylistCard>
            ))}
        </PlaylistCardContainer>

        <Title>
          Top Shows
          <SeeAllButton>See all</SeeAllButton>
        </Title>
        <CardContainer>
          {show?.items &&
            show.items.map((item) => (
              <CardTerciary key={item.show.id}>
                <CardTerciaryContainer>
                  <CardTerciaryImg src={item.show.images[0].url} alt="" />
                  <CardTerciaryText>{item.show.name}</CardTerciaryText>
                </CardTerciaryContainer>
              </CardTerciary>
            ))}
        </CardContainer>
      </Container>
    </>
  );
};

export default Home;
