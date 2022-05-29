import React from 'react'
import { Container, Title, TopArtistShape, TopArtistCardCaption, TopArtistImg, TopArtistsContainer } from './Artists.styled';
import {SeeAllButton} from '../Button/Button.styled';

const Artists = ({artists}) => {
  return (
    <Container>
        <Title>Top Artists
          <SeeAllButton>See all</SeeAllButton>
        </Title>
        
        <TopArtistsContainer>
          {artists?.items ? artists.items.map((item) => 
            <TopArtistShape>
              <TopArtistImg src={item.images[0].url}/>
              <TopArtistCardCaption>{item.name}</TopArtistCardCaption>
            </TopArtistShape>
        ):null}
        </TopArtistsContainer>
        
        
    </Container>
  )
}

export default Artists;