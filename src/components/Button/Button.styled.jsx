import styled from 'styled-components';


export const LoginButton = styled.a`
    display: flex;
    flex-direction: row;
    align-self: center;
    background-color: #fff;
    text-decoration: none;
    color: #000000;
    padding: 1rem 2rem;
    letter-spacing: .2rem;
    border-radius: 5rem;
    font-size: 16px;
    margin-top: 2rem;
    border: none;
    box-shadow: 0 .5rem 1rem #ada8a8;
    font-family: 'Koulen', cursive;
    transition: all .2s;
    
        &::after{ 
            background-color: #f4f4f4;
            color: #4a4848;
        }
    
    &:hover{
        transform: translateY(-0.3rem);
        &::after{
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }
`

export const SeeAllButton = styled.button`
    display: flex:
    flex-direction: row;
    align-self: start;
    letter-spacing: .2rem;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    font-family: 'Koulen', cursive;
    border:none;
    background-color: transparent;
    transition: all .2s;
    color: #f4f4f4;
    
    &:hover{
        transform: translateY(-0.3rem);
    }
`

export const MenuOptionButton = styled.button`
    letter-spacing: .2rem;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    font-family: 'Koulen', cursive;
    border:none;
    background-color: transparent;
    transition: all .2s;
    color: #f4f4f4;
    margin-bottom: 2rem;
    
    text-decoration: none;
    
    &:hover{
        transform: translateY(-0.3rem);
    }
`