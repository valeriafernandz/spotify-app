import styled from 'styled-components';


export const LoginButton = styled.button`
    padding: 1rem 2rem;
    letter-spacing: .2rem;
    border-radius: 5rem;
    font-size: 16px;
    margin-top: 2rem;
    border: none;
    box-shadow: 0 .5rem 1rem #ada8a8;
    border: none;
    text-transform: uppercase;
    font-family: 'Koulen', cursive;
    transition: all .2s;
    
        &::after{ 
            background-color: #fff;
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