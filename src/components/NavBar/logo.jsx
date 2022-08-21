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
`;

export const Logo = () => {
    return(
        <LogoContainer>
            <LogoImg />
        </LogoContainer>
    )
}