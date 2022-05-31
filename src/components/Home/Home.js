import React from "react";
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
import { SeeAllButton } from "../Button/Button.styled";
import {
  PlaylistCard,
  CardContainer,
  PlaylistImg,
  CardTextPrimary,
  CardTextSecondary,
  CardTerciary,
  CardTerciaryContainer,
  CardTerciaryImg,
  CardTerciaryText
} from "../Card/Card.styled";
import Playlist from "../Playlist/Playlist";

const Home = () => {
  let playlistURL = "https://api.spotify.com/v1/me/playlists?limit=4";
  let artistsURL = "https://api.spotify.com/v1/me/top/artists?limit=4";
  let showsURL = "https://api.spotify.com/v1/me/shows";
  let profileURL = "https://api.spotify.com/v1/me";

  const [token, setToken] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [artists, setArtists] = useState([]);
  const [show, setShow] = useState([]);
  const [asset, setAsset] = useState([]);

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };

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
      const fetchProfile = async () => {
        const result = await axios.get(`${profileURL}`, { headers });
        setAsset(result.data);
      };
      fetchProfile();

      const fetchArtists = async () => {
        const result = await axios.get(`${artistsURL}`, { headers });
        setArtists(result.data);
      };
      fetchArtists();

      const fetchPlaylists = async () => {
        const result = await axios.get(`${playlistURL}`, { headers });
        setPlaylist(result.data);
      };
      fetchPlaylists();

      const fetchShows = async () => {
        const result = await axios.get(`${showsURL}`, { headers });
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
        <Link to="/artists" state={{asset}}><SeeAllButton>See all</SeeAllButton></Link>
        </Title>

        <TopArtistsContainer>
          {artists?.items
            ? artists.items.map((item) => (
                <TopArtistShape key={item.id}>
                  <TopArtistImg src={item.images[0].url} />
                  <TopArtistCardCaption>{item.name}</TopArtistCardCaption>
                </TopArtistShape>
              ))
            : null}
        </TopArtistsContainer>

        <Title>
          Top Playlists
          <SeeAllButton>See all</SeeAllButton>
        </Title>
        <CardContainer>
          {playlist?.items
            ? playlist.items.map((item) => (
                <PlaylistCard key={item.id}>
                  <div className="card-container">
                    <PlaylistImg src={item.images[0].url} alt="" />
                    <CardTextPrimary>{item.name}</CardTextPrimary>
                    <CardTextSecondary>
                      Owner: {item.owner.display_name}
                    </CardTextSecondary>
                  </div>
                </PlaylistCard>
              ))
            : null}
        </CardContainer>

        <Title>Top Shows
            <SeeAllButton>See all</SeeAllButton>
        </Title>
        <CardContainer>
        {show?.items
            ? show.items.map((item) => (
                <CardTerciary key={item.show.id}>
                  <CardTerciaryContainer>
                    <CardTerciaryImg src={item.show.images[0].url} alt="" />
                    <CardTerciaryText>{item.show.name}</CardTerciaryText>
                  </CardTerciaryContainer>
                </CardTerciary>
              ))
            : null}
        </CardContainer>
      </Container>
    </>
  );
};

export default Home;
