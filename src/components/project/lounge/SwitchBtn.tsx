import React, { useState } from "react";
import styled from "styled-components";

const SwitchBtn: React.FC<{ isOn: boolean }> = ({ isOn }) => {
  return (
    <SwitchContainer>
      <SwitchHandle isOn={isOn}>
        <SwitchIndicator isOn={isOn} />
      </SwitchHandle>
    </SwitchContainer>
  );
};

export default SwitchBtn;

const SwitchContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const SwitchHandle = styled.div<{ isOn: boolean }>`
  width: 35px;
  height: 20px;
  background-color: ${({ isOn }) => (isOn ? "#B931E0" : "#CBD5E1")};
  border-radius: 15px;
  position: relative;
  transition: background-color 0.3s;
`;

const SwitchIndicator = styled.div<{ isOn: boolean }>`
  width: 15px;
  height: 15px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2.5px;
  left: ${({ isOn }) => (isOn ? "18px" : "2.5px")};
  transition: left 0.3s;
`;
