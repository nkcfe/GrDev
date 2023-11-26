import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import styled from "styled-components";
import { ImageResize } from "quill-image-resize-module-ts";
import HeaderSelect from "./HeaderSelect";
import AWS from "aws-sdk";
import { CSSTransition } from "react-transition-group";
import "../Modal/index.css";
Quill.register("modules/imageResize", ImageResize);

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
const CustomToolbar: React.FC<Props> = ({
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

interface RichTextProps {
  bodyValue: string;
  setBodyValue: React.Dispatch<React.SetStateAction<string>>;
}

const RichText: React.FC<RichTextProps> = ({ bodyValue, setBodyValue }) => {
  const [isTextDragging, setIsTextDragging] = useState<boolean>(false);
  const [toolbarPosition, setToolbarPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });
  const quillRef = useRef<ReactQuill | null>(null);

  useEffect(() => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();

      quill.on("selection-change", (range) => {
        if (range) {
          if (range.length > 0) {
            setIsTextDragging(true);
          } else {
            setIsTextDragging(false);
          }
          const selectionBounds = quill.getBounds(range.index, range.length);
          const editorBounds = quill.getBounds(0, quill.getLength());
          const top = selectionBounds.top - editorBounds.top + window.scrollY;
          const left =
            selectionBounds.left - editorBounds.left + window.scrollX;
          setToolbarPosition({ top, left });
        }
      });
      quill.on("text-change", (delta, oldDelta, source) => {
        // 텍스트가 입력되었을 때
        if (source === "user") {
          const text = quill.getText();
          if (text.includes("/")) {
            setIsTextDragging(true);
          } else {
            setIsTextDragging(false);
          }
          const indexOfSlash = text.indexOf("/");

          if (indexOfSlash !== -1) {
            const selectionBounds = quill.getBounds(indexOfSlash, 1); // 1은 '/'의 길이
            const editorBounds = quill.getBounds(0, quill.getLength());
            const top = selectionBounds.top - 26 + window.scrollY;
            const left =
              selectionBounds.left - editorBounds.left + window.scrollX;
            setToolbarPosition({ top, left });
          }
        }
      });
    }
  }, []);

  const imageHandler = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      try {
        const name = Date.now();
        AWS.config.update({
          region: process.env.REACT_APP_AWS_S3_BUCKET_REGION,
          accessKeyId: process.env.REACT_APP_AWS_S3_BUCKET_ACCESS_KEY_ID,
          secretAccessKey:
            process.env.REACT_APP_AWS_S3_BUCKET_SECRET_ACCESS_KEY,
        });
        const upload = new AWS.S3.ManagedUpload({
          params: {
            ACL: "public-read",
            Bucket: "groovy-dev-image",
            Key: `upload/${name}`,
            Body: file,
          },
        });
        const IMG_URL = await upload.promise().then((res) => res.Location);

        if (quillRef.current) {
          const editor = quillRef.current.getEditor();
          const range = editor.getSelection();
          if (range) {
            editor.insertEmbed(range.index, "image", IMG_URL);
          }
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: "#toolbar",
        handlers: {
          image: imageHandler,
        },
      },
      imageResize: {
        parchment: Quill.import("parchment"),
        modules: ["Resize", "DisplaySize"],
      },
    };
  }, []);

  const formats = [
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

  return (
    <Base>
      <CustomToolbar
        toolbarPosition={toolbarPosition}
        isTextDragging={isTextDragging}
      />
      <QuillContainer
        ref={quillRef}
        value={bodyValue}
        onChange={setBodyValue}
        placeholder="'/'를 입력하여 툴바 사용"
        modules={modules}
        formats={formats}
        onFocus={() => setIsTextDragging(true)}
      />
    </Base>
  );
};

export default RichText;

// quill css
const Base = styled.div`
  margin: 0 auto;
  width: 100%;
  border: none;
  position: relative;
`;

const QuillContainer = styled(ReactQuill)`
  width: 100%;
  .ql-editor {
    font-size: 16px;
    width: 100%;
    pre.ql-syntax {
      background-color: #23241f;
      color: #f8f8f2;
      overflow: visible;
    }

    outline: none;
    margin-top: 10px;
    padding: 10px;
    position: relative;
  }
  .ql-editor.ql-blank::before {
    color: rgba(0, 0, 0, 0.3);
    content: attr(data-placeholder);
    top: 26px;
    pointer-events: none;
    position: absolute;
  }
  .ql-editor blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
  }
  .ql-editor pre.ql-syntax {
    background-color: #f7f6f3;
    color: #373530;
    overflow: visible;
  }
  .ql-editor pre {
    border-radius: 10px;
    white-space: pre-wrap;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 20px;
  }
  .ql-editor img {
    max-width: 100%;
  }
  .ql-container {
    min-height: 50em;
    border: none;
  }
  .ql-clipboard {
    left: -100000px;
    height: 1px;
    overflow-y: hidden;
    position: absolute;
    top: 50%;
  }
  .ql-clipboard p {
    margin: 0;
    padding: 0;
  }
  .ql-hidden {
    display: none;
  }
`;

// 여기부터 toolbar1 css
const Wrapper = styled.div<{
  toolbarPosition: { top: number; left: number };
  isTextDragging: boolean;
}>`
  display: ${({ isTextDragging }) => (isTextDragging ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  position: absolute;
  top: ${({ toolbarPosition }) => `${toolbarPosition.top - 20}px`};
  left: ${({ toolbarPosition }) => `${toolbarPosition.left}px`};

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
