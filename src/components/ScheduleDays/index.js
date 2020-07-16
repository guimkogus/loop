import React, { useState } from "react";

import { Container } from "./styles";
import palette from "../../config/palette";

export default ({
  schedule,
  daySelected,
  onDayClick,
  hourSelected,
  onHourClick,
}) => {
  const [hoursAvailable, setHoursAvailable] = useState([
    "09:00",
    "10:00",
    "11:00",
    "12:00",
  ]);

  return (
    <Container>
      <div className="infoContainer">
        {schedule.map((date, i) => (
          <div
            key={i}
            className="divButton"
            onClick={() => {
              onDayClick([date[0], date[1]]);
              onHourClick();
              setHoursAvailable(date[2]);
            }}
            style={
              daySelected > []
                ? { backgroundColor: palette.selected }
                : { backgroundColor: palette.white }
            }
          >
            <p className="dayName">{date[0]}</p>
            <p className="dayNumber">{date[1]}</p>
          </div>
        ))}
      </div>
      <div className="infoContainer">
        {hoursAvailable.map((hour, i) => (
          <div
            key={i}
            className="divButton"
            onClick={() => onHourClick(hour)}
            style={
              hourSelected > []
                ? { backgroundColor: palette.selected }
                : { backgroundColor: palette.white }
            }
          >
            <p className="hour">{hour}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};
