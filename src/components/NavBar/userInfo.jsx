import { useEffect } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { LoginContext } from "../../Context/LoginContext";

const WellcomeMsg = styled.div`
  width: 30%;
  height: 1.5rem;
  position: absolute;
  bottom: 0;
  left: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const User = styled.p`
    font-size: .7rem;
    color: var(--dark-gray)
`;

export const UserInfo = () => {
  const { user,isLog } = useContext(LoginContext);
  
  return (
    <WellcomeMsg>
      <User>Login</User>
    </WellcomeMsg>
  );
};
