import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartWidwet } from "./cartButton";
import { Logo } from "./logo";
import { SearchSection } from "./search";
import { UserInfo } from "./userInfo";

const Nav = styled.nav`
  background: var(--yellow);
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0 0 10px black;
  padding: 0 5rem 0 5rem;
  position: relative;
`;
const Search = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3.5rem;
`;
const UlContainer = styled.div`
  background-color: var(--yellow);
  width: 100%;
  justify-content: center;
  display: flex;  
  align-items: center;
  height: 1.5rem;
`;
const UlNavigation = styled.ul`
  width: 50%;
  display: flex;
  font-size: .7rem;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Roboto", sans-serif;
  z-index: 11;
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
        <UserInfo />
        <SearchSection />
        <CartWidwet />
      </Search>
      <UlContainer>
        <UlNavigation>          
          <ul><Link to="/category/classical">Classical</Link></ul>
          <ul><Link to="/category/acustic">Acustic</Link></ul>
          <ul><Link to="/category/electric">Electric</Link></ul>
          <ul><Link to="/category/ukelele">Ukelele</Link></ul>
          <ul>Sale!!</ul>
        </UlNavigation>
      </UlContainer>
    </Nav>
  );
};

export default Navbar;
