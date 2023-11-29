import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  children: ReactNode;
  pointColor?: string;
  pos?: string;
  fontSize?: string;
  fontWeight?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disable?: boolean;
  isSelected?: boolean;
}

const ActiveButton: React.FC<ButtonProps> = ({
  children,
  pointColor = "basic",
  onClick,
  pos,
  fontSize,
  fontWeight,
  disable,
  isSelected,
}) => {
  return (
    <Base
      pointColor={pointColor}
      onClick={onClick}
      pos={pos}
      fontSize={fontSize}
      fontWeight={fontWeight}
      isSelected={isSelected}
    >
      {children}
    </Base>
  );
};

export default ActiveButton;

interface BaseProps {
  pointColor?: string;
  pos?: string;
  fontSize?: string;
  fontWeight?: string;
  isSelected?: boolean;
}

const Base = styled.button<BaseProps>`
  ${({ isSelected }) =>
    !isSelected
      ? css`
          background-color: #fff;

          color: black;
          &:hover {
            background-color: #d5d5df;
          }
        `
      : css`
          background-color: #4fa0eb;
          color: #fff;
        `}
  display:flex;
  border: none;
  justify-content: center;
  align-items: center;
  position: ${({ pos }) => (pos ? pos : "static")};
  gap: 5px;

  top: 0;
  left: 0;

  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : null)};

  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
