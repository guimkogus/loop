import styled from "styled-components";
import palette from "../../config/palette";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin-bottom: 40px;

  .divButton {
    background-color: ${palette.white};
    border-radius: 100px;
    cursor: pointer;
    margin: 15px;
  }

  .divSelected {
    background-color: ${palette.selected};
    border-radius: 100px;
    margin: 15px;
  }

  .infoContainer {
    display: flex;
    flex-direction: row;
    color: ${palette.text};
    justify-content: center;
    text-align: center;

    .dayName,
    .dayNumber,
    .hour {
      margin: 0;
    }

    .dayName {
      font-size: 14px;
      padding-bottom: 1px;
      padding-top: 15px;
      padding-right: 20px;
      padding-left: 20px;
    }
    .dayNumber {
      font-size: 20px;
      padding-top: 1px;
      padding-bottom: 15px;
    }

    .hour {
      font-size: 18px;
      padding: 15px;
    }

    .dayNumber,
    .hour {
      font-weight: bold;
    }
  }
`;
