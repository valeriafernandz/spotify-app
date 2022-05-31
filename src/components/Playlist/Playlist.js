import React from "react";
import {
  PlaylistCard,
  CardContainer,
  PlaylistImg,
  CardTextPrimary,
  CardTextSecondary,
} from "../Card/Card.styled";
import { SeeAllButton } from "../Button/Button.styled";
import { Container, Title } from "../Artists/Artists.styled";

const Playlist = ({ playlist }) => {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
};

export default Playlist;
