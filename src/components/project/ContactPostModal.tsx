import React, { useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import ContactDropdown from "./ContactDropdown";
import ContactRadio from "./ContactRadio";
import Button from "../common/Button";
import ActiveButton from "../common/ActiveButton";
import { v4 as uuidv4 } from "uuid";
import { Projects } from "../../interface/interface";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import RichText from "../post/RichText";
import { getToday } from "../post/function/common";

const purposeItem = [
  "포트폴리오/직무 역량 강화",
  "창업/수익 창출",
  "재미/네트워킹",
];

const timeItem = ["매주 4시간 이하", "매주 4-10시간", "매주 10시간 이상"];

const roleItem = ["프론트엔드", "백엔드", "디자인", "기획", "기타"];

interface Props {
  toggleModal: () => void;
  contactTypeValue: string;
  setContactTypeValue: React.Dispatch<React.SetStateAction<string>>;
  contactTitleValue: string;
  setContactTitleValue: React.Dispatch<React.SetStateAction<string>>;
  contactDesValue: string;
  contactSetDesValue: React.Dispatch<React.SetStateAction<string>>;
  contactPurposeValue: string;
  setContactPurposeValue: React.Dispatch<React.SetStateAction<string>>;
  contactTimeValue: string;
  setContactTimeValue: React.Dispatch<React.SetStateAction<string>>;
  contactSelectedOption: string;
  setContactSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  projects: Projects[];
  setProjects: React.Dispatch<React.SetStateAction<Projects[]>>;
  projectBodyValue: string;
  setProjectBodyValue: React.Dispatch<React.SetStateAction<string>>;
}

const ContactPostModal: React.FC<Props> = ({
  toggleModal,
  contactTypeValue,
  setContactTypeValue,
  contactTitleValue,
  setContactTitleValue,
  contactDesValue,
  contactSetDesValue,
  contactPurposeValue,
  setContactPurposeValue,
  contactTimeValue,
  setContactTimeValue,
  contactSelectedOption,
  setContactSelectedOption,
  projects,
  setProjects,
  projectBodyValue,
  setProjectBodyValue,
}) => {
  const onChangeTypeValue = (type: string) => {
    setContactTypeValue(type);
  };

  const onChangeTitleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactTitleValue(e.target.value);
  };
  const onChangeDesValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    contactSetDesValue(e.target.value);
  };

  const fetchAddProject = async () => {
    const newProject = {
      id: uuidv4(),
      author: "chul",
      type: contactTypeValue,
      title: contactTitleValue,
      summary: contactDesValue,
      purpose: contactPurposeValue,
      weekly_time: contactTimeValue,
      recruitment_role: contactSelectedOption,
      detail_body: projectBodyValue,
      creation_date: getToday(),
      likes_counts: 0,
    };
    setProjects((prev) => [...prev, newProject]);
    await setDoc(doc(db, "projects", newProject.id), newProject);
    setContactTypeValue("");
    setContactTitleValue("");
    contactSetDesValue("");
    setContactPurposeValue("포트폴리오/직무 역량 강화");
    setContactTimeValue("매주 4시간 이하");
    setContactSelectedOption("");
    setProjectBodyValue("");
    toggleModal();
  };

  return (
    <Base>
      <Header>
        <span>프로젝트 생성하기</span>
        <CloseBtnWrapper onClick={toggleModal}>
          <IoClose />
        </CloseBtnWrapper>
      </Header>
      <Body>
        <BtnWrapper>
          <ActiveButton
            onClick={() => onChangeTypeValue("사이드 프로젝트")}
            isSelected={contactTypeValue === "사이드 프로젝트"}
          >
            사이드 프로젝트
          </ActiveButton>
          <ActiveButton
            onClick={() => onChangeTypeValue("스터디 모임")}
            isSelected={contactTypeValue === "스터디 모임"}
          >
            스터디 모임
          </ActiveButton>
        </BtnWrapper>
        <Label>타이틀</Label>
        <Input
          placeholder="프로젝트 타이틀을 입력해주세요."
          value={contactTitleValue}
          onChange={(e) => onChangeTitleValue(e)}
        />
        <Label>요약</Label>
        <Textarea
          placeholder="프로젝트 요약을 입력해주세요."
          value={contactDesValue}
          onChange={(e) => onChangeDesValue(e)}
        />
        <SplitContainer>
          <DropdownWrapper>
            <Label>목적</Label>
            <ContactDropdown
              dropItem={purposeItem}
              selectedValue={contactPurposeValue}
              setSelectedValue={setContactPurposeValue}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Label>참여 시간 (선택)</Label>
            <ContactDropdown
              dropItem={timeItem}
              selectedValue={contactTimeValue}
              setSelectedValue={setContactTimeValue}
            />
          </DropdownWrapper>
        </SplitContainer>
        <Label>모집 역할</Label>
        <ContactRadio
          options={roleItem}
          selectedOption={contactSelectedOption}
          setSelectedOption={setContactSelectedOption}
        />
        <Label>상세 내용</Label>
        <DetailContainer>
          <RichText
            bodyValue={projectBodyValue}
            setBodyValue={setProjectBodyValue}
          />
        </DetailContainer>
        <SubBtnWrapper onClick={fetchAddProject}>
          <Button fontSize="16px" fontWeight="bold" pointColor="red">
            작성 완료
          </Button>
        </SubBtnWrapper>
      </Body>
    </Base>
  );
};

export default ContactPostModal;

const Base = styled.div`
  background: #ededed;
  width: 600px;
  height: 90vh;
  border-radius: 15px;
  overflow: scroll;
  position: relative;
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background: #fff;
  border-radius: 15px 15px 0 0;
  border-bottom: 0.5px solid #dfdfdf;
  span {
    padding: 15px;
    font-size: 16px;
    font-weight: bold;
  }
  z-index: 99;
`;

const CloseBtnWrapper = styled.div`
  margin-left: auto;
  margin-right: 10px;
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #dfdfdf;
  border-radius: 100%;
  font-size: 20px;
  &:hover {
    background: #cecccf;
  }
  cursor: pointer;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  padding: 25px;
  width: 100%;
  background-color: #ededed;
`;

const Label = styled.div`
  margin-top: 15px;
  margin-left: 10px;
  font-size: 15px;
  font-weight: bold;
`;

const Input = styled.input`
  outline: none;
  border: none;

  background: #fff;
  border-radius: 10px;

  padding: 10px 15px;
  margin-top: 10px;

  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }
`;

const Textarea = styled.textarea`
  outline: none;
  border: none;

  background: #fff;
  border-radius: 10px;

  padding: 10px 15px;
  margin-top: 10px;

  width: 100%;
  height: 100px;
  resize: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }
`;

const SplitContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const DropdownWrapper = styled.div`
  width: 100%;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 15px;
  margin: 10px 0;
`;

const SubBtnWrapper = styled.div`
  margin-top: 50px;
  margin-left: auto;
`;

const DetailContainer = styled.div`
  margin-top: 15px;
  padding: 15px;
  width: 100%;
  height: 10%;
  overflow: scroll;
  background-color: #fff;
  border-radius: 15px;
`;
