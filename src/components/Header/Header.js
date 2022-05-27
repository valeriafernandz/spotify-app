import React from 'react'
import { HeaderLogo, HeaderContainer, HeaderTitle } from './Header.styled'
import whiteLogo from '../../assets/images/logo-white.png'

const Header = () => {
  return (
    <>
        <HeaderContainer>
            <HeaderLogo src={whiteLogo}/>
            <HeaderTitle>Spotify App Aesthetic</HeaderTitle> 
        </HeaderContainer>
            
    </>
  )
}

export default Header