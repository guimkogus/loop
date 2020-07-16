import React from "react";
import Button from "@material-ui/core/Button";
import { Container } from "./styles";

export default ({ title }) => {
  return (
    <Container>
      <Button variant="contained" color="inherit">
        {title}
      </Button>
    </Container>
  );
};
