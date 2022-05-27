import React from 'react'
import { ArtistContainer, ArtistTitle, TopArtistCard, TopArtistsContainer } from './Artists.styled'

const Artists = ({artist}) => {
  return (
    <ArtistContainer>
        <ArtistTitle>Top Artists</ArtistTitle>
        {artist?.items ? artist.items.map((item) => <>
        <TopArtistsContainer>
            <TopArtistCard>{item.name}</TopArtistCard>
        </TopArtistsContainer>
        </>):null}
        
    </ArtistContainer>
  )
}

export default Artists