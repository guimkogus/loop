import styled from "styled-components";
import palette from "../../config/palette";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width: 300px;
  height: 450px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${palette.edge};
  border-style: solid;

  img {
    width: 100%;
    height: auto;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  hr {
    height: 1px;
    width: 100%;
    background-color: ${palette.edge};
    border: none;
    margin: 0;
  }

  svg {
    width: 20px;
    height: auto;
    margin: 0;
  }

  p {
    margin: 0;
    padding-left: 20px;
  }

  .name,
  .price {
    color: ${palette.title};
    font-weight: bold;
  }

  .name {
    font-size: 24px;
  }

  .price {
    font-size: 20px;
  }

  .details,
  .location {
    color: ${palette.text};
  }

  .details {
    word-wrap: break-word;
    width: 70%;
    font-size: 14px;
    text-align: start;
  }

  .location {
    font-size: 16px;
  }

  .locationContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    padding-left: 20px;
  }
`;
