import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 33%;
`;
const SearchInput = styled.input`
  width: 50%;
  height: 2rem;
  text-align: center;
  &::placeholder {
    content: "que tocamos hoy?";
  }
  &:focus {
    outline: none;
  }
`;
const SearchButton = styled.button`
  width: 5rem;
  &::after {
    content: "Buscar";
  }
`;
export const SearchSection = () => {
  return (
    <SearchContainer>
      <SearchInput placeholder="Que buscas?" />
      <SearchButton />
    </SearchContainer>
  );
};
