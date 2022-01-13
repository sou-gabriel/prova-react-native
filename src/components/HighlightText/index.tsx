import React from "react";

import { Container, Text, InnerContainer, InnerText } from "./styles";

export const HighlightText = () => {
  return (
    <Container>
      <Text>
        The Greatest {"\n"} App {"\n"}{" "}
        <InnerContainer>
          <InnerText>for</InnerText>
        </InnerContainer>
        {"\n"}
        LOTTERY
      </Text>
    </Container>
  );
};
