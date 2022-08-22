import styled from "styled-components";
import { CartWidwet } from "./cartButton";
import { Logo } from "./logo";
import { SearchSection } from "./search";

const Nav = styled.nav`
  background: var(--bg1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0 0 10px black;
`;
const Search = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4rem;
`;
const UlContainer = styled.div`
  background-color: var(--white);
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 2rem;
`;
const UlNavigation = styled.ul`
  width: 80%;
  display: flex;
  font-size: .7rem;
  list-style: none;
  justify-content: space-evenly;
  font-family: "Roboto", sans-serif;
  & > ul {
    margin: 0.3rem;
    transition: all 0.3s;
    height: 100%;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
const Navbar = () => {
  return (
    <Nav>
      <Search>
        <Logo />
        <SearchSection />
        <CartWidwet />
      </Search>
      <UlContainer>
        <UlNavigation>
          <ul>Home</ul>
          <ul>Products</ul>
          <ul>Sales!</ul>
          <ul>Help</ul>
          <ul>About Us</ul>
        </UlNavigation>
      </UlContainer>
    </Nav>
  );
};

export default Navbar;
