import { Outlet } from "react-router-dom";
import {
  Header,
  IconWrapper,
  LogoNavLink,
  StyledNavLink,
  StyledNavigation,
  StyledText,
} from "./Layout.styled";
import { IoCarSport } from "react-icons/io5";
import { IconContext } from "react-icons";

const Layout = () => {
  return (
    <div>
      <Header>
        <LogoNavLink to="/">
          <IconContext.Provider
            value={{
              color: "white",
              size: "3em",
            }}
          >
            <IconWrapper>
              <IoCarSport />
              <StyledText>Car Rental</StyledText>
            </IconWrapper>
          </IconContext.Provider>
        </LogoNavLink>
        <StyledNavigation>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/catalog">Catalog</StyledNavLink>
          <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        </StyledNavigation>
      </Header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
