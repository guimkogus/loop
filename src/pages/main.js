import React from "react";
import { Text, Container } from "./styles";

export default () => {
  return (
    <Container>
      <Text style={{ color: "#2e323c" }}>Textos</Text>
      <Text style={{ color: "#5c6369" }}>Subtextos</Text>
      <Text style={{ color: "#ff123c" }}>Botões</Text>
      <Text style={{ color: "#4c9300" }}>Selecionados</Text>
      <Text style={{ color: "#ebeef0" }}>Bordas</Text>
    </Container>
  );
};
