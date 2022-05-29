import styled from 'styled-components';

export const Container = styled.div`
    margin: 2vw;
`

export const Title = styled.span`
    display:flex;
    flex-direction: row;
    font-size: 2rem;
    color: #f4f4f4;
`

export const TopArtistsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-content: space-between;
`

export const TopArtistShape = styled.figure`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 15rem;
    height: 15rem;
    -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    position: relative;
`

export const TopArtistImg = styled.img`
    transform: scale(1.4);
    backface-visibility: hidden;
    transition: all .5s;

    &:hover{
        transform: scale(1);
        filter: blur(3px) brightness(80%);
    }
`

export const TopArtistCardCaption = styled.figcaption`
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

    &:hover{
        opacity: 1;
        transform: translate(-50%,-50%);
    }
`

