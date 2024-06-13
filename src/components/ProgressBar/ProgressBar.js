/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBarDefault = ({ value, size }) => {
  let Component = MediumDefault;
  if (size === "small") {
    Component = SmallDefault;
  }
  if (size === "large") {
    Component = LargeDefault;
  }
  return (
    <Component value={value} max={100}>
      {value}
    </Component>
  );
};

const MediumDefault = styled.progress`
  height: 12px;
  border: none;

  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: 4px;
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: ${(props) => (props.value > 97 ? "4px" : "4px 0px 0px 4px")};
  }
`;

const SmallDefault = styled(MediumDefault)`
  height: 8px;
`;

const LargeDefault = styled(MediumDefault)`
  height: 24px;

  &::-webkit-progress-bar {
    padding: 4px;
  }
`;

const ProgressBar = ({ value, size }) => {
  let Component = Wrapper;
  if (size === "small") {
    Component = SmallWrapper;
  }
  if (size === "large") {
    Component = LargeWrapper;
  }
  return (
    <Component
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <BarWrapper>
        <Bar value={value} />
      </BarWrapper>
    </Component>
  );
};

const Wrapper = styled.div`
  height: 12px;
  width: 370px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${(props) => props.value}%;
  border-radius: 4px 0 0 4px;
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  // So that the inner bar is trimmed when progress bar is near full
  overflow: hidden;
  height: 100%;
`;

const SmallWrapper = styled(Wrapper)`
  height: 8px;
`;

const LargeWrapper = styled(Wrapper)`
  height: 24px;
  padding: 4px;
  // For chunky corners
  border-radius: 8px;
`;

export default ProgressBar;
