import React from "react";

import { Container } from "./styles";

export default ({ href, onHomeClick }) => {
  return (
    <Container>
      <div className="box">
        <div className="content">
          <a href={onHomeClick}>
            <img src={require("../../assets/loop.png")} alt={"LOOP"} />
          </a>
          <div>
            <a href={href}>Vender</a>
            <a href={href}>Comprar</a>
            <a href={href}>Lojas</a>
          </div>
        </div>
      </div>
      <hr />
    </Container>
  );
};
