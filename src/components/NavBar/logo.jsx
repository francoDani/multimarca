import styled from "styled-components";
import logo from "../../img/logo.png";

const LogoContainer = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
`
const LogoImg = styled.div`
  background-image: url(${logo});
  width: 10rem;
  height: 4rem;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  position: relative;
`;
const Home = styled.a`
    background-color: transparent;
    width: 100%;
    height: 100%;
    z-index: 50;
    position: absolute;
    top: 0;
    left: 0;
`

export const Logo = () => {
    return(
        <LogoContainer>
            <LogoImg><Home href="/"/></LogoImg>
        </LogoContainer>
    )
}