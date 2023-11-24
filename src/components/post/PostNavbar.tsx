import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const PostNavbar: React.FC = () => {
  const navigate = useNavigate();
  const onClickCancleBtn = () => {
    navigate("/");
  };
  return (
    <Base>
      <Button fontWeight="bold" pointColor="red" onClick={onClickCancleBtn}>
        취소
      </Button>
      <Button fontWeight="bold" pointColor="black">
        저장
      </Button>
    </Base>
  );
};

export default PostNavbar;

const Base = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  position: sticky;
  top: 0;

  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;

  padding: 10px 30px;

  background: #fff;

  height: 40px;

  z-index: 2;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  span {
    font-weight: normal;
  }
`;

const CtrContainer = styled.div``;
