import React from "react";
import { Container } from "./styles";
import Header from "../components/Header";
import Back from "../components/Back";
import CarInfo from "../components/CarInfo";
import Schedule from "../components/Schedule";

const dbSchema = [
  {
    description: {
      image: "",
      name: "",
      details: "",
      price: "",
      location: "",
    },
    schedule: {
      mes: [
        ["dia1", "horários"],
        ["dia2", "horários"],
        ["dia3", "horários"],
        ["dia4", "horários"],
        ["dia5", "horários"],
        ["dia6", "horários"],
      ],
    },
  },
  {
    description: {
      image: require("../assets/delorean.jpg"),
      name: "Delorean",
      details: "REX FULL 8V ELÉTRICO 4P AUTOMÁTICO",
      price: "R$ 43.800",
      location: "Hill Valley - CA",
    },
    schedule: {
      julho: [
        ["QUA", 18],
        ["QUI", 12, 13, 17],
        ["SEX", 13, 14, 15, 18],
        ["SAB", 9, 14],
        ["SEG", 9, 10, 11, 12, 13, 15, 16, 17, 18],
        ["TER", 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      ],
    },
  },
];

export default () => {
  return (
    <div>
      <Header href="https://github.com/guimkogus/loop" />
      <Container>
        <div className="body">
          <Back href="https://github.com/guimkogus/loop" />
          <div className="content">
            <CarInfo description={dbSchema[1].description} />
            <Schedule />
          </div>
        </div>
      </Container>
    </div>
  );
};
