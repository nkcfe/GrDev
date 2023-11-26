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
}

const Button: React.FC<ButtonProps> = ({
  children,
  pointColor = "basic",
  onClick,
  pos,
  fontSize,
  fontWeight,
  disable,
}) => {
  return (
    <Base
      pointColor={pointColor}
      onClick={onClick}
      pos={pos}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </Base>
  );
};

export default Button;

interface BaseProps {
  pointColor?: string;
  pos?: string;
  fontSize?: string;
  fontWeight?: string;
}

const Base = styled.button<BaseProps>`
  ${({ pointColor }) =>
    pointColor === "basic"
      ? css`
          background-color: #fff;
          border: 1px solid #d5d5df;
          color: black;
          &:hover {
            background-color: #d5d5df;
          }
        `
      : pointColor === "blue"
      ? css`
          background-color: #4fa0eb;
          color: #fff;
          &:hover {
            background-color: #468ccd;
          }
        `
      : pointColor === "black"
      ? css`
          background-color: #191b2a;
          border: 1px solid #191b2a;
          color: #fff;
          &:hover {
            background-color: #292b45;
          }
        `
      : pointColor === "red"
      ? css`
          background-color: #fb5a50;
          border: 1px solid #fb5a50;
          color: #fff;
          &:hover {
            background-color: #dd5147;
          }
        `
      : css`
          background-color: #fff;
          border: 1px solid #d5d5df;
          color: black;
          &:hover {
            background-color: #d5d5df;
          }
        `}

  display:flex;
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
