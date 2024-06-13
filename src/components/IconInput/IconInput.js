import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    fontSize: 14 / 16 + "rem",
    iconSize: 16,
    spacing: 8,
  },
  large: {
    fontSize: 18 / 16 + "rem",
    iconSize: 24,
    spacing: 12,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const sizes = SIZES[size];
  if (!sizes) {
    throw Error("ah!");
  }
  return (
    <Wrapper style={{ "--width": width + "px" }}>
      <IconWrapper style={{ "--size": sizes.iconSize + "px" }}>
        <Icon id={icon} size={sizes.iconSize} />
        <VisuallyHidden>{label}</VisuallyHidden>
      </IconWrapper>
      <NativeInput
        sizes={sizes}
        placeholder={placeholder}
        type="text"
      ></NativeInput>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  width: var(--width);
  padding: 4px 0px;
  border-bottom: 1px solid ${COLORS.black};
  position: relative;
  color: ${COLORS.gray700};
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

const NativeInput = styled.input`
  border: none;
  width: 100%;
  padding-left: ${(p) => p.sizes.iconSize + p.sizes.spacing}px;
  outline-offset: 8px;
  font-size: ${(p) => p.sizes.fontSize};

  font-weight: 700;
  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
