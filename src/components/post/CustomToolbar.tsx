import React from "react";
import styled from "styled-components";
import { Quill } from "react-quill";
import HeaderSelect from "./HeaderSelect";
import { ImageResize } from "quill-image-resize-module-ts";

Quill.register("modules/imageResize", ImageResize);

// Quill 커스텀 툴바 모듈 셋업
export const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {},
  },
  imageResize: {
    parchment: Quill.import("parchment"),
    modules: ["Resize", "DisplaySize"],
  },
};

// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "font",
  "bold",
  "italic",
  "underline",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "image",
  "color",
  "code-block",
];

const icons = Quill.import("ui/icons");
icons["bold"] = '<i class="fa-solid fa-bold"></i>';
icons["italic"] = '<i class="fa-solid fa-italic"></i>';
icons["underline"] = '<i class="fa-solid fa-underline"></i>';
icons["strike"] = '<i class="fa-solid fa-strikethrough"></i>';
icons["blockquote"] = '<i class="fa-solid fa-quote-left"></i>';
icons["image"] = '<i class="fa-solid fa-image"></i>';
icons["list"]["ordered"] = '<i class="fa-solid fa-list-ol"></i>';
icons["list"]["bullet"] = '<i class="fa-solid fa-list-ul"></i>';
icons["color"] = '<i class="fa-solid fa-font"></i>';
icons["background"] = '<i class="fa-solid fa-bold"></i>';
icons["code-block"] = '<i class="fa-solid fa-code"></i>';
icons["header"]["1"] =
  '<i class="fa-solid fa-heading"></i>1  <span>제목1<span>';
icons["header"]["2"] =
  '<i class="fa-solid fa-heading"></i>2  <span>제목2<span>';
icons["header"]["3"] =
  '<i class="fa-solid fa-heading"></i>2  <span>제목3<span>';
icons["header"][""] = '<i class="fa-solid fa-t"></i>  <span>본문<span>';

interface Props {
  toolbarPosition: { top: number; left: number };
  isTextDragging: boolean;
}

// Quill Toolbar component
export const CustomToolbar: React.FC<Props> = ({
  toolbarPosition,
  isTextDragging,
}) => {
  return (
    <Wrapper
      id="toolbar"
      toolbarPosition={toolbarPosition}
      isTextDragging={isTextDragging}
    >
      <HeaderSelect />
      <Formats className="ql-formats">
        <Button className="ql-bold" />
        <Button className="ql-italic" />
        <Button className="ql-underline" />
        <Button className="ql-strike" />
      </Formats>
      <VerticlaLine />
      <Formats className="ql-formats">
        <Button className="ql-list" value="ordered" />
        <Button className="ql-list" value="bullet" />
      </Formats>
      <VerticlaLine />

      <Formats className="ql-formats">
        <Button className="ql-blockquote" />
        <Button className="ql-image" />
        <Button className="ql-code-block" />
      </Formats>
    </Wrapper>
  );
};

export default CustomToolbar;

const Wrapper = styled.div<{
  toolbarPosition: { top: number; left: number };
  isTextDragging: boolean;
}>`
  display: ${({ isTextDragging }) => (isTextDragging ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  position: absolute;
  top: ${({ toolbarPosition }) => `${toolbarPosition.top - 30}px`};

  width: 390px;
  padding: 5px;

  background: #fff;
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  input.ql-image[type="file"],
  input.ql-image[type="file"] {
    display: none;
  }
  .ql-active {
    color: #716f7a;
    background: #f3f2f7;
  }
  z-index: 22;
`;

const Formats = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const VerticlaLine = styled.div`
  width: 1px;
  height: 20px;
  margin: 0 5px;
  border-right: 1px solid #d5d5df;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 7px;
  cursor: pointer;

  border: none;
  border-radius: 5px;

  background: #fff;
  color: #414044;

  &:hover {
    color: #716f7a;
    background: #f3f2f7;
  }
`;
