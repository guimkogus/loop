import React from "react";
import Button from "@material-ui/core/Button";
import { Container } from "./styles";

export default ({ title, style, onClick }) => {
  return (
    <Container>
      <Button
        variant="contained"
        color="inherit"
        style={style}
        onClick={onClick}
      >
        {title}
      </Button>
    </Container>
  );
};
