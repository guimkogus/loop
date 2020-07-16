import styled from "styled-components";

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

  text {
    font-size: 24px;
    text-align: center;
    margin: 20px;
  }
`;
