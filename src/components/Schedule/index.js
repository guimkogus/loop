import React from "react";
import { Container } from "./styles";
import Button from "../Button";
import ScheduleHeader from "../ScheduleHeader";

export default () => {
  return (
    <Container>
      <ScheduleHeader title="Agende o dia e horário da sua visita" />
      <div className="content">
        <Button title="Agendar Visita" />
      </div>
    </Container>
  );
};
