import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 33%;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 1.5rem;
  border: none;
  padding-left: 5px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 0.7rem;
    color: var(--light-gray);
  }
`;
const SearchButton = styled.button`
  width: 1.5rem;  
  font-size: 0.7rem;
  border: none;
  cursor: pointer;
`;
export const SearchSection = () => {
  return (
    <SearchContainer>
      <SearchInput placeholder="Que buscas?" />
      <SearchButton>
        <FontAwesomeIcon icon={faSearch} />
      </SearchButton>
    </SearchContainer>
  );
};
