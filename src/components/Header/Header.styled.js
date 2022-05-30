import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    align-items: center;
`

export const HeaderLogo = styled.img`
    display: flex;
    flex-direction: column;
    width: 5vw;
    margin: 2vw;
`

export const HeaderTitle = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    text-align: center;
    color: #f4f4f4;
`
export const Profile = styled.figure`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 5rem;
    height: 5rem;
    -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    background-image: url(${({url})=>url || ''});
    background-size: cover;
`