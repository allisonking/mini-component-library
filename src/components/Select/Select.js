import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <Presentation>
        <Label>{displayedValue}</Label>
        <IconWrapper>
          <Icon id="chevron-down" size={24}></Icon>
        </IconWrapper>
      </Presentation>
    </Wrapper>
  );
};

const SelectWrapper = styled.select`
  opacity: 0;
  position: absolute;
  left: 0;
  height: 100%;
  top: 0;
  width: 100%;
`;

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
`;

const Presentation = styled.div`
  color: ${COLORS.gray700};
  border-radius: 8px;
  font-size: 1rem;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;

  ${SelectWrapper}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${SelectWrapper}:hover + & {
    color: ${COLORS.black};
  }
`;

const Label = styled.div`
  margin-right: 24px;
  display: inline;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: 24px;
  height: 24px;
  pointer-events: none;
`;

export default Select;
