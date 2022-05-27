import React from 'react'
import {PlaylistCard, CardContainer} from '../Card/Card.styled';

const Playlist = ({data}) => {
  return (
    <CardContainer>
        {data?.items ? data.items.map((item) => 
            <PlaylistCard>
            <div className="card-container">
                <img src={item.images[1].url}></img>
                <h5 className="card-name">{item.name}</h5>
                <span className="nft-id">{item.tracks.total}</span>
            </div>
            </PlaylistCard>
        
     ):null}
     </CardContainer>
  )
}

export default Playlist