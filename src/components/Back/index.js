import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { Container } from "./styles";

export default ({ href }) => {
  return (
    <Container>
      <a href={href}>
        <ArrowBackIosIcon />
        Voltar
      </a>
    </Container>
  );
};
