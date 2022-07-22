import React from "react";
import { SeeAllButton } from "../Button/Button.styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../Artists/Artists.styled";
import { SEARCH_URL } from "../../constants/index";
import { useLocation } from "react-router-dom";
import { PlaylistCardContainer, PlaylistCard, PlaylistCardImg, CardTextPrimary, CardTextSecondary } from "../Playlists/Playlist.styled";

const Search = () => {
  const navigate = useNavigate();

  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const token = window.localStorage.token;

  const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
  };

  const searchItem = async (e) =>{
    e.preventDefault();
    const result = await axios.get(`${SEARCH_URL}`,
  {
    headers,
        params: {
          q: searchKey,
          type: "artist"
        }
  });
      setSearchResult(result.data.artists);
      console.log(searchResult)
    };

  return (
    <Container>
      <SeeAllButton onClick={() => navigate(-1)}>&#8592; Go back</SeeAllButton>

      <form onSubmit={searchItem}>
        <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
        <button type={"submit"}>Search</button>
      </form>

     
      <PlaylistCardContainer>
          {searchResult?.items && searchResult.items.map((item) => (
              <Link to="/artists/artist" state={{ item }} style={{textDecoration:'none', color:'#000'}}>
                <PlaylistCard key={item.id}>
                <PlaylistCardImg src={!!item.id && item?.images?.length ? item.images[0].url : null} alt="" />
                    <CardTextPrimary>{item.name}</CardTextPrimary>
                </PlaylistCard>
              </Link>
            ))}
        </PlaylistCardContainer>
     

    </Container>
  );
};

export default Search;
