import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../NavBar/logo";
import { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginContainer = styled.div`
  background-color: var(--white-t);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
`;
const FormContainer = styled.div`
  background-color: var(--yellow);
  min-width: 400px;
  height: 450px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 200px;
  font-size: 1.5rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Input = styled.input`
  width: 65%;
  border: none;
  padding: 2px;
  &:focus {
    outline: none;
  }
`;
const LoginBtn = styled.button`
  width: 30%;
  margin: 1rem;
  background-color: var(--blue);
  border: none;
  color: var(--white);
  padding: 5px;
`;
export const LoginView = () => {
  const { validate, setPass, getUser } = useContext(LoginContext);
  const [email, setEmail] = useState();

  const changeHandler = (e) => {
    let mail = e.target.value;
    setEmail(mail);
    console.log(email);
  };

  return (    
    <LoginContainer>
      <Close>
        <Link to="/"><FontAwesomeIcon icon={faClose} /></Link>
      </Close>
      <FormContainer>
        <Logo />
        <Form action="">
          <label htmlFor="email">Email</label>
          <Input type="text" name="email" onChange={changeHandler} />
          <label htmlFor="pass">Contraseña</label>
          <Input type="password" onChange={(e) => setPass(e.target.value)}/>
          <LoginBtn
            onClick={(e) => {
              e.preventDefault();
              getUser(email);
            }}
          >
            Ingresar
          </LoginBtn>
        </Form>
      </FormContainer>
    </LoginContainer>
  );
};
