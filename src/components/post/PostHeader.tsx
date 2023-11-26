import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { BsFillImageFill } from "react-icons/bs";
import Button from "../common/Button";
import AWS from "aws-sdk";

const defaultCoverImgUrl =
  "https://images.unsplash.com/photo-1617107374365-442a6876ed0a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHBpbmt8ZW58MHx8MHx8fDA%3D";

interface Props {
  titleValue: string;
  setTitleValue: React.Dispatch<React.SetStateAction<string>>;
  coverImgUrl: string;
  setCoverImgUrl: React.Dispatch<React.SetStateAction<string>>;
}

const PostHeader: React.FC<Props> = ({
  titleValue,
  setTitleValue,
  coverImgUrl,
  setCoverImgUrl,
}) => {
  const [isOnCoverImg, setIsOnCoverImg] = useState<boolean>(false);
  const onToggleCoverImg = () => {
    setIsOnCoverImg(!isOnCoverImg);
    setCoverImgUrl(defaultCoverImgUrl);
  };

  const onChangeTitleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  const RemoveCoverImg = () => {
    setCoverImgUrl("");
    setIsOnCoverImg(false);
  };

  const onClickChangeCoverImg = async () => {
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
        const res = await upload.promise();
        const IMG_URL = res.Location;
        setCoverImgUrl(IMG_URL);
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <Base>
      {isOnCoverImg ? (
        <CoverImgContainer coverImgUrl={coverImgUrl}>
          <CoverImgCtrContainer>
            <CoverImgCtrBtn position="left" onClick={onClickChangeCoverImg}>
              커버 변경
            </CoverImgCtrBtn>
            <CoverImgCtrBtn position="right" onClick={RemoveCoverImg}>
              커버 삭제
            </CoverImgCtrBtn>
          </CoverImgCtrContainer>
        </CoverImgContainer>
      ) : (
        <HoverCtrContainer onClick={onToggleCoverImg}>
          <Button pointColor="black">
            <BsFillImageFill />
            <span>커버 추가</span>
          </Button>
        </HoverCtrContainer>
      )}

      <TitleWrapper>
        <Title
          placeholder="제목을 입력해 주세요"
          maxLength={80}
          onChange={onChangeTitleValue}
          value={titleValue}
        />
        <MaxLength>{titleValue.length} / 80</MaxLength>
      </TitleWrapper>
    </Base>
  );
};

export default PostHeader;

const HoverCtrContainer = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
  transition: opacity 0.2s ease;
`;

const CoverImgCtrContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 5px;
  bottom: 5px;
`;

const CoverImgCtrBtn = styled.div<{ position: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  padding: 5px;

  font-size: 13px;

  border-radius: ${({ position }) =>
    position === "left" ? "5px 0 0 5px" : "0 5px 5px 0"};

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  cursor: pointer;
  &:hover {
    background: #e2e2e2;
  }
`;

const CoverImgContainer = styled.div<{ coverImgUrl: string }>`
  position: relative;

  width: 100%;
  height: 200px;

  background: gray;
  background-image: ${({ coverImgUrl }) => `url(${coverImgUrl})`};
  background-size: cover;
  background-position: center;
  &:hover ${CoverImgCtrContainer} {
    display: flex;
  }
`;

const Base = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  &:hover ${HoverCtrContainer} {
    opacity: 1;
  }
`;

const TitleWrapper = styled.div`
  width: 90%;
  position: relative;
`;

const Title = styled.input`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  outline: none;
  border: none;

  font-size: 30px;
  font-weight: bold;
  color: #191b2a;

  &::placeholder {
    color: #e3e2e2;
  }
`;

const MaxLength = styled.div`
  position: absolute;
  color: #cccccc;
  font-size: 20px;
  font-weight: bold;
  top: 25px;
  right: -80px;
`;
