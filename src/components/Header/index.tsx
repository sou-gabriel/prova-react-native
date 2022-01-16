import React from "react";

import { Container, LogoContainer, Logo, HorizontalLine } from "./styles";

export const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo>TGL</Logo>
        <HorizontalLine />
      </LogoContainer>
    </Container>
  );
};
