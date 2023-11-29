import React from "react";
import styled, { css } from "styled-components";

import { TbMoonFilled } from "react-icons/tb";
import { MdWbSunny } from "react-icons/md";
import { LuGripVertical } from "react-icons/lu";

const ThemeToggleBtn: React.FC<{
  toggleTheme: () => void;
  themeMode: string;
}> = ({ toggleTheme, themeMode }) => {
  return (
    <Base onClick={toggleTheme} themeMode={themeMode}>
      <ToggleBtn themeMode={themeMode}>
        {themeMode === "LightMode" ? <MdWbSunny /> : <TbMoonFilled />}
      </ToggleBtn>
    </Base>
  );
};

export default ThemeToggleBtn;

const Base = styled.div<{ themeMode: string }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;

  width: 70px;
  height: 40px;
  background: ${({ themeMode }) =>
    themeMode === "LightMode" ? "#ffc553" : "#555E89"};

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

const ToggleBtn = styled.div<{ themeMode: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  left: ${({ themeMode }) => (themeMode === "LightMode" ? "8px" : "34px")};

  padding: 5px;

  border-radius: 10px;

  position: absolute;

  background: #fff;
  svg {
    color: ${({ themeMode }) =>
      themeMode === "LightMode" ? "#ffc553" : "#121C46"};
  }
`;
