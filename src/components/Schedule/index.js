import React from "react";
import { FormControl, InputLabel, Input } from "@material-ui/core";

import { Container } from "./styles";
import Button from "../Button";
import ScheduleHeader from "../ScheduleHeader";
import ScheduleDays from "../ScheduleDays";

export default ({
  schedule,
  setSendSchedule,
  setDaySelected,
  daySelected,
  setHourSelected,
  hourSelected,
  scheduled,
  setScheduled,
}) => {
  return (
    <Container>
      <ScheduleHeader
        title={
          !scheduled
            ? "Agende o dia e horário da sua visita"
            : "Concluir Agendamento"
        }
      />
      <div className="content">
        {!scheduled && (
          <>
            <p className="title">julho 2020</p>
            <ScheduleDays
              schedule={schedule}
              daySelected={daySelected}
              onDayClick={setDaySelected}
              hourSelected={hourSelected}
              onHourClick={setHourSelected}
            />
            <Button
              title={"Agendar Visita"}
              style={
                daySelected && hourSelected
                  ? { opacity: "1" }
                  : { opacity: "0.2" }
              }
              onClick={
                daySelected && hourSelected ? () => setScheduled(true) : null
              }
            />
          </>
        )}
        {scheduled && (
          <>
            <p className="title">
              {daySelected[0]}, {daySelected[1]} de julho, {hourSelected} horas
            </p>
            <div className="formulary">
              <FormControl className="nomeForm">
                <InputLabel className="emailInput" htmlFor="nome">
                  Nome
                </InputLabel>
                <Input id="nome" />
              </FormControl>
              <div className="formBottom">
                <FormControl className="emailForm">
                  <InputLabel className="emailInput" htmlFor="email">
                    E-mail
                  </InputLabel>
                  <Input id="email" />
                </FormControl>
                <FormControl className="telefoneForm">
                  <InputLabel className="emailInput" htmlFor="telefone">
                    Telefone
                  </InputLabel>
                  <Input id="telefone" />
                </FormControl>
              </div>
            </div>
            <Button title={"Concluir"} onClick={() => setSendSchedule(true)} />
          </>
        )}
      </div>
    </Container>
  );
};
