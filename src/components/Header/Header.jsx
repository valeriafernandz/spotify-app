import React from "react";
import {
  HeaderLogo,
  HeaderContainer,
  HeaderTitle,
  Profile,
} from "./Header.styled";
import whiteLogo from "../../assets/images/logo-white.png";

const Header = ({ asset, token }) => {
  return (
    <>
      <HeaderContainer>
        <HeaderLogo src={whiteLogo} />
        <HeaderTitle>Spotify App</HeaderTitle>
        <div key={asset.id} className="profile-Container">
          <Profile
            url={!!token && asset?.images?.length ? asset.images[0].url : null}
          />
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
