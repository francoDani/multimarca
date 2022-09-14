import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/logo.png";

const LogoContainer = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
`
const LogoImg = styled.div`
  background-image: url(${logo});
  width: 9rem;
  height: 4rem;
  background-size: cover;
  background-position: center;
  position: absolute;
  cursor: pointer;
  position: relative;
`;

export const Logo = () => {
    return(
        <LogoContainer>
            <Link to="/"><LogoImg></LogoImg></Link>
        </LogoContainer>
    )
}