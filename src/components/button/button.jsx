import styled from "styled-components";

export const Button = styled.button`
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid var(--light-green);
  color: var(--light-green);
  font-weight: bold;
  background-color: var(--white);
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: var(--light-green);
    color: white;
  }
`;