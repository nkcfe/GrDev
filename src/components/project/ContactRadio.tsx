import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  options: string[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const ContactRadio: React.FC<Props> = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <RadioGroupContainer>
      {options.map((option) => (
        <RadioLabel key={option}>
          <RadioInput
            type="radio"
            name="radioGroup"
            value={option}
            checked={selectedOption === option}
            onChange={() => handleOptionChange(option)}
          />
          {option}
        </RadioLabel>
      ))}
    </RadioGroupContainer>
  );
};

export default ContactRadio;

const RadioGroupContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;
  display: flex;
  gap: 15px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
`;

const RadioInput = styled.input`
  margin-right: 8px;
  width: 16px; /* Adjust the width to make it square */
  height: 16px; /* Adjust the height to make it square */
  &[type="radio"]:checked {
    background-color: #ed6653;
    outline: #ed6653;
  }
`;
