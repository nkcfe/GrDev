import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";

const HeaderSelect = () => {
  const [selectedName, setSelectedName] = useState("본문");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOpenSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectName = (name: string) => {
    setSelectedName(name);
    handleOpenSelect();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <Selected onClick={handleOpenSelect}>
        <span>{selectedName}</span>
        <AiOutlineDown />
      </Selected>

      <HeaderContainer isOpen={isOpen}>
        <Button
          className="ql-header"
          value=""
          onClick={() => handleSelectName("본문")}
        />
        <Button
          className="ql-header"
          value="1"
          onClick={() => handleSelectName("제목1")}
        />
        <Button
          className="ql-header"
          value="2"
          onClick={() => handleSelectName("제목2")}
        />
        <Button
          className="ql-header"
          value="3"
          onClick={() => handleSelectName("제목3")}
        />
      </HeaderContainer>
    </DropdownContainer>
  );
};

export default HeaderSelect;

const DropdownContainer = styled.div`
  position: relative;
  margin-right: 10px;
`;

const Selected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  padding: 7px;
  border-radius: 5px;

  font-size: 14px;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    color: #716f7a;
    background: #f3f2f7;
  }
`;

const HeaderContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  width: 80px;
  top: 35px;
  left: -10px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  display: flex;
  justify-content: start;
  align-items: start;

  font-size: 14px;
  font-weight: bold;
  width: 100%;
  padding: 8px;
  text-align: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
  span {
    margin-left: 5px;
  }
`;
