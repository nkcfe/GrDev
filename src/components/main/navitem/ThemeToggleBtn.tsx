import React from "react";
import styled, { css } from "styled-components";

import { TbMoonFilled } from "react-icons/tb";
import { MdWbSunny } from "react-icons/md";
import { LuGripVertical } from "react-icons/lu";

const ThemeToggleBtn = () => {
  return (
    <Base>
      <TbMoonFilled />
      <MdWbSunny />
      <ToggleBtn>
        <LuGripVertical />
      </ToggleBtn>
    </Base>
  );
};

export default ThemeToggleBtn;

const Base = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;

  width: 70px;
  height: 40px;

  background: #ffc553;

  padding: 8px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }

  svg {
    color: white;
  }

  cursor: pointer;
  position: relative;
`;

const ToggleBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  left: 8px;

  padding: 5px;

  border-radius: 10px;

  position: absolute;

  background: #fff;
  svg {
    color: #ffc553;
  }
`;
