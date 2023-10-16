import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { border } from "../styles";
import SocialsContainer from "./SocialsContainer";

const SideBar = (): React.JSX.Element => {
  return (
    <Wrapper>
      <Logo className="logo-wrapper" />
      <SocialsContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: sidebar;

  width: 5em;

  position: fixed;
  top: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 3em;

  border-right: ${border["--border-sm-solid"]} rgba(27, 22, 66, 0.1);

  .logo-wrapper {
    border-bottom: ${border["--border-sm-solid"]} rgba(27, 22, 66, 0.1);
    padding: 1em;
  }
`;

export default SideBar;
