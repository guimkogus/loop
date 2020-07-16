import React, { useState } from "react";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Container } from "./styles";
import Header from "../components/Header";
import Back from "../components/Back";
import CarInfo from "../components/CarInfo";
import Schedule from "../components/Schedule";
import Okay from "../components/Okay";
import Button from "../components/Button";

const dbSchema = [
  {
    description: {
      image: "",
      name: "",
      details: "",
      price: "",
      location: "",
    },
    schedule: [
      ["Mês Ano"],
      ["dia1", "horários"],
      ["dia2", "horários"],
      ["dia3", "horários"],
      ["dia4", "horários"],
      ["dia5", "horários"],
      ["dia6", "horários"],
    ],
  },
  {
    description: {
      image: require("../assets/delorean.jpg"),
      name: "Delorean",
      details: "REX FULL 8V ELÉTRICO 2P AUTOMÁTICO",
      price: "R$ 43.800",
      location: "Hill Valley - CA",
    },
    schedule: [
      ["QUI", 16, ["18:00"]],
      ["SEX", 17, ["12:00", "13:00", "17:00"]],
      ["SAB", 18, ["13:00", "14:00", "15:00", "18:00"]],
      ["SEG", 20, ["9:00", "14:00"]],
      ["TER", 21, ["9:00", "10:00", "11:00", "12:00", "13:00", "15:00"]],
      ["QUA", 22, ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00"]],
    ],
  },
];

export default () => {
  const [daySelected, setDaySelected] = useState();
  const [hourSelected, setHourSelected] = useState();
  const [scheduled, setScheduled] = useState(false);
  const [sendSchedule, setSendSchedule] = useState(false);

  return (
    <>
      <Header
        href="https://github.com/guimkogus/loop"
        onHomeClick="http://localhost:3000/"
      />
      <Container>
        {!sendSchedule && (
          <div className="body">
            <Back href="http://localhost:3000/" />
            <div className="content">
              <CarInfo description={dbSchema[1].description} />
              <Schedule
                schedule={dbSchema[1].schedule}
                setSendSchedule={setSendSchedule}
                setDaySelected={setDaySelected}
                daySelected={daySelected}
                setHourSelected={setHourSelected}
                hourSelected={hourSelected}
                scheduled={scheduled}
                setScheduled={setScheduled}
              />
            </div>
          </div>
        )}
        {sendSchedule && (
          <div className="concludedContainer">
            <Okay />
            <p className="title">Agendamento concluído!</p>
            <div className="details">
              <DateRangeOutlinedIcon />
              <p>
                {daySelected[0]}, {daySelected[1]} julho 2020 às {hourSelected}
              </p>
              <LocationOnOutlinedIcon />
              <p>{dbSchema[1].description.location}</p>
            </div>
            <Button title="Outros Veículos" style={{ marginTop: 30 }} />
          </div>
        )}
      </Container>
    </>
  );
};
