import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  PlaylistCard,
  CardContainer,
  PlaylistImg,
  CardTextPrimary,
  CardTextSecondary,
} from "../Card/Card.styled";
import { SeeAllButton } from "../Button/Button.styled";
import { Container, Title } from "../Artists/Artists.styled";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Playlist = () => {
  let playlistURL = "https://api.spotify.com/v1/me/playlists";
  const token = window.localStorage.token;

  const navigate = useNavigate();

  const [playlist, setPlaylist] = useState([]);

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };


  useEffect(() => {
    if (token) {

      const fetchPlaylists = async () => {
        const result = await axios.get(`${playlistURL}`, { headers });
        setPlaylist(result.data);
      };
      fetchPlaylists();
    }
  }, [token]);
  return (
    <>
    <SeeAllButton onClick={() => navigate(-1)}>&#8592; Go back</SeeAllButton>
      <Container>
        <CardContainer>
          {playlist?.items
            ? playlist.items.map((item) => (
              <Link to="/playlists/playlist" state={{item}}>
                <PlaylistCard key={item.id}>
                  <div className="card-container">
                    <PlaylistImg src={item.images[0].url} alt="" />
                    <CardTextPrimary>{item.name}</CardTextPrimary>
                    <CardTextSecondary>
                      Owner: {item.owner.display_name}
                    </CardTextSecondary>
                  </div>
                </PlaylistCard>
              </Link>
              ))
            : null}
        </CardContainer>
      </Container>
    </>
  );
};

export default Playlist;
