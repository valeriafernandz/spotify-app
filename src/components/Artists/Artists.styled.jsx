import styled from 'styled-components';

export const Container = styled.div`
    margin: 5vw;
`

export const Title = styled.span`
    display:flex;
    flex-direction: row;
    font-size: 2rem;
    color: #f4f4f4;
    margin-top: 2rem;
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
    width: 60vw;
    height: 50vh;
    margin-left:18vw;
    background-image: url(${({url})=>url || ''});
    background-size: contain;
	margin: 0 auto;
    border-radius: 2rem;
    justify-content: center;
`

export const ArtistName = styled.span`
    display:flex;
    flex-direction: row;
    font-size: 5rem;
    color: white;
`

export const ArtistTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  background-color: #f4f4f4;
  border-radius: 2rem;
  justify-content: center;
  margin-left: 30%;
  margin-bottom: 2rem;
  margin-top: 2rem;
`

export const ArtistTopContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
    gap: 2rem 2rem;
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


