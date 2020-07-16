import styled from "styled-components";
import palette from "../../config/palette";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 68%;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${palette.edge};
  border-style: solid;

  .content {
    align-items: center;
    flex-direction: column;

    .title {
      color: ${palette.text};
      font-size: 24px;
      font-weight: bold;
    }
  }

  .formulary {
    display: flex;
    flex-direction: column;
    width: 80%;

    .nomeForm,
    .emailForm,
    .telefoneForm {
      border-color: ${palette.edge};
      border-width: 1px;
      border-style: solid;
      border-radius: 10px;
      margin: 10px;
    }

    .emailForm,
    .telefoneForm {
      width: 45%;
    }

    .formBottom {
      margin-bottom: 80px;
    }

    .nomeInput,
    .emailInput,
    .telefoneInput {
      color: ${palette.text};
    }
  }
`;
