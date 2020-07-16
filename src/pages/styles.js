import styled from "styled-components";
import palette from "../config/palette";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  .body {
    width: 53%;
    height: 600px;
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .concludedContainer {
    background-color: ${palette.white};
    width: 50%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    margin-top: 80px;

    .title {
      font-size: 24px;
      font-weight: bold;
      color: ${palette.title};
    }

    .details {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      p,
      svg {
        color: ${palette.text};
        font-size: 18px;
        font-weight: bold;
      }

      svg {
        font-size: 22px;
        margin: 10px;
      }
    }
  }
`;
