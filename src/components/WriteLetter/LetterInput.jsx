import { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useSearchLetter } from "../../hooks/queries/useSearch";

export function LetterInput({ setLetterList, active, setActive }) {
  const [inputValue, setValue] = useState("");
  console.log(inputValue);
  const { data, refetch } = useSearchLetter(inputValue);

  useEffect(() => {
    if (!active && !!data) {
      setLetterList(data);
    }
  }, [data, active]);

  const handleSearchResult = (e) => {
    if (e.key === "Enter") {
      refetch(); // API 호출
      setActive(false);
    }
  };

  return (
    <LetterInputDiv>
      <Icon
        icon="tabler:search"
        width="24px"
        height="24px"
        style={{ color: "#A5A5A5" }}
      />
      <Input
        value={inputValue}
        placeholder="검색"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleSearchResult}
      />
    </LetterInputDiv>
  );
}

const LetterInputDiv = styled.div`
  box-sizing: border-box;
  width: 68vw;
  height: 50px;
  border-radius: 15px;
  border: 1px solid #eeeeee;
  background-color: white;
  margin-left: 8vw;
  display: flex;
  align-items: center;
  position: relative;
  column-gap: 5px;
  padding-left: 15px;
`;
const Input = styled.input`
  box-sizing: border-box;
  width: 80%;
  border: none;
  outline: none;
  font-size: 16px;
`;