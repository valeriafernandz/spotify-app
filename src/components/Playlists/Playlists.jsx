import React from "react";
import { PLAYLISTS_URL } from "../../constants/index";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  PlaylistCardContainer,
  PlaylistCard,
  PlaylistCardImg,
  CardTextPrimary,
  CardTextSecondary,
} from "./Playlist.styled";
import { SeeAllButton } from "../Button/Button.styled";
import { Container } from "../Artists/Artists.styled";
import { Link, useNavigate } from "react-router-dom";

const Playlists = () => {
  const token = window.localStorage.token;

  const navigate = useNavigate();

  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    if (token) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };

      const fetchPlaylists = async () => {
        const result = await axios.get(`${PLAYLISTS_URL}`, { headers });
        setPlaylist(result.data);
      };
      fetchPlaylists();
    }
  }, [token]);
  return (
    <>
      <SeeAllButton onClick={() => navigate(-1)}>&#8592; Go back</SeeAllButton>
      <Container>
        <PlaylistCardContainer>
          {playlist?.items &&
            playlist.items.map((item) => (
              <Link to="/playlists/playlist" state={{ item }} style={{textDecoration:'none', color:'#000'}}>
                <PlaylistCard key={item.id} onClick={() => navigate('/')}>
                    <PlaylistCardImg src={item.images[0].url} alt="" />
                    <CardTextPrimary>{item.name}</CardTextPrimary>
                    <CardTextSecondary>
                      Owner: {item.owner.display_name}
                    </CardTextSecondary>
                </PlaylistCard>
              </Link>
            ))}
        </PlaylistCardContainer>
      </Container>
    </>
  );
};

export default Playlists;
