import React, { useState } from "react";
import { Container } from "./styles";
import Button from "../Button";
import ScheduleHeader from "../ScheduleHeader";
import ScheduleDays from "../ScheduleDays";

export default ({ schedule, setSendSchedule }) => {
  const [daySelected, setDaySelected] = useState([]);
  const [hourSelected, setHourSelected] = useState();
  const [scheduled, setScheduled] = useState(false);

  return (
    <Container>
      <ScheduleHeader
        title={
          scheduled
            ? "Concluir Agendamento"
            : "Agende o dia e horário da sua visita"
        }
      />
      <div className="content">
        <p className="monthName">Julho 2020</p>
        <ScheduleDays
          schedule={schedule}
          daySelected={daySelected}
          onDayClick={setDaySelected}
          hourSelected={hourSelected}
          onHourClick={setHourSelected}
        />
        {!scheduled && (
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
        )}
        {scheduled && (
          <Button title={"Concluir"} onClick={() => setSendSchedule(true)} />
        )}
      </div>
    </Container>
  );
};
