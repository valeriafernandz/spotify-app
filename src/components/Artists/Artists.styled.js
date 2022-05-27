import styled from 'styled-components';

export const ArtistContainer = styled.div`
    margin: 2vw;
`

export const ArtistTitle = styled.span`
    display:flex;
    font-size: 2rem;
    color: #f4f4f4;
`

export const TopArtistsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

`

export const TopArtistCard = styled.figure`
    display: flex;
    flex-direction: column;
    background-color: white;
    align-self: center;
    width: 15rem;
    height: 15rem;
    shape-outside: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    
`