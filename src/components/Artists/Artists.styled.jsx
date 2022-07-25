import styled from 'styled-components';

export const Container = styled.div`
    margin: 2.5vw;
    display: flex;
    flex-direction: column;
    width: 80%;
`

export const Title = styled.span`
    display:flex;
    flex-direction: row;
    font-size: ${({fontSize})=>fontSize || '2rem'};
    color: #f4f4f4;
    margin-top: 1.5rem;
    align-self: ${({textAlign})=>textAlign || 'start'};
`

export const TopArtistsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-content: space-between;
    gap: 2rem;

`

export const TopArtistImg = styled.img`
    transform: scale(1.3);
    backface-visibility: hidden;
    transition: all .5s;

`

export const TopArtistCardCaption = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,20%);
    color: #f4f4f4;
    font-size: 1.7rem;
    text-align: center;
    opacity: 0;
    transition: all .5s;
    backface-visibility: hidden;
`

export const TopArtistShape = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 15rem;
    height: 15rem;
    -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    position: relative;

    &:hover{
        ${TopArtistImg}{
            transform: scale(1);
            filter: blur(3px) brightness(80%);
        }
        ${TopArtistCardCaption}{
            opacity: 1;
            transform: translate(-50%,-50%);
        }
    }
`

export const ArtistHeader = styled.div`
    display:flex;
    flex-direction: row;
    width: 100%;
    background-image: url(${({url})=>url || ''});
    justify-content: center;
    height: 40vh;
    opacity: 0.8;
`

export const ArtistName = styled.span`
    display:flex;
    flex-direction: row;
    font-size: 5rem;
    color: #f4f4f4;
    opacity: 1;
    align-self: center;
`

export const ArtistTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  background-color: #292728;
  justify-content: start;
  margin-bottom: 2rem;
  color: #f4f4f4;
`

export const ArtistTopImg = styled.img`
    display: flex;
    flex-direction: column;
    width: 15%;
`

export const ArtistTopText = styled.span`
    display: flex;
    flex-direction: column;
    color: #000;
    align-self: center;
    font-size: 1.5rem;
`

export const ArtistInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 1rem 1rem;
`
export const TableImg = styled.img`
    max-width: 4rem;
`
export const RelatedArtistsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    background-color: #292728;
    justify-content: start;
    margin-bottom: 2rem;
    color: #f4f4f4;
`



