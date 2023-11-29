import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { TiArrowSortedDown } from "react-icons/ti";

interface Props {
  dropItem: string[];
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}

const ContactDropdown: React.FC<Props> = ({
  dropItem,
  selectedValue,
  setSelectedValue,
}) => {
  const [isDropOpen, setIsDropOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onChangeSelect = (item: string) => {
    setSelectedValue(item);
    closeDropdown();
  };

  const openDropdown = () => {
    setIsDropOpen(true);
  };

  const closeDropdown = () => {
    setIsDropOpen(false);
  };

  return (
    <Base>
      <Selected onClick={isDropOpen ? closeDropdown : openDropdown}>
        {selectedValue}
        <TiArrowSortedDown />
      </Selected>
      <DropdownContainer isDropOpen={isDropOpen} ref={dropdownRef}>
        {dropItem.map((item) => (
          <DropdownItem onClick={() => onChangeSelect(item)} key={item}>
            {item}
          </DropdownItem>
        ))}
      </DropdownContainer>
    </Base>
  );
};

export default ContactDropdown;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: start;

  margin-top: 10px;

  position: relative;
`;

const Selected = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  border-radius: 10px;
  padding: 10px 15px;
  background: #fff;

  font-size: 14px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0) ;

  }
`;

const DropdownContainer = styled.div<{ isDropOpen: boolean }>`
  display: ${({ isDropOpen }) => (isDropOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 5px;
  animation: ${fadeIn} 0.3s ease-in-out;
  width: 100%;
  border-radius: 10px;
  padding: 5px;
  background: #f6f6f6;

  font-size: 14px;

  position: absolute;
  top: 45px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

const DropdownItem = styled.div`
  font-size: 14px;
  width: 100%;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;
