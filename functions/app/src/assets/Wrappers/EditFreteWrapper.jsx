import { styled } from "styled-components";

export const Wrapper = styled.div`
  .edit_frete-container {
    position: relative;
    margin-top: 10rem;
    .d1,
    .d2,
    .d3 {
      padding: 2rem;
      div {
        width: 50%;
        display: grid;
        justify-content: end;
        margin-top: 1rem;
        width: 70%;
      }
    }
    .d4,
    .d5,
    .d6 {
      padding: 2rem;
      div {
        width: 70%;
        display: grid;
        justify-content: end;
        margin: 0;
        margin-top: 1rem;
      }
    }
    display: grid;
    grid-template-columns: 1fr 1fr;
    p {
      text-align: center;
      margin-bottom: 2rem;
    }
    input,
    select {
      width: 20rem;
      height: 4rem;
      margin: 0;
    }
    .msg {
      display: flex;
      justify-content: center;
      text-align: center;
      #text {
        height: 10rem;
      }
    }
  }
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
    //style do submit-btn no app.css linha 166
    #submit-btn {
      margin-top: 3rem;
    }
  }
  @media (max-width: 920px) {
    .edit_frete-container {
      grid-template-columns: 1fr;
      margin: 1rem 1px;
      .d1,
      .d2,
      .d3,
      .d4,
      .d5,
      .d6 {
        display: grid;
        row-gap: 1rem;
      }
      .d2 {
        row-gap: 2rem;
      }
      .form-box,
      #form-box,
      .form-opt,
      #form-opt {
        display: block !important;
        margin: 0 auto;
        width: 90%;
        input,
        select {
          width: 100%;
        }
      }
    }
    margin: 0;
    margin-bottom: 3rem;

    .btn-container {
      margin-bottom: 5rem;
    }
  }
  @media (max-width: 470px) {
    .edit_frete-container {
      .d1,
      .d2,
      .d3,
      .d4,
      .d5,
      .d6 {
        width: 100%;
        & > * {
          margin-left: 2rem;
        }
      }
    }
  }
`;
