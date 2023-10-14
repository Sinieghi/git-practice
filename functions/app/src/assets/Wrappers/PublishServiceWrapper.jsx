import { styled } from "styled-components";

export const Wrapper = styled.div`
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  width: 85%;
  margin: 0 auto;
  background-color: var(--white);
  z-index: 555555;
  @media (min-width: 2000px) {
    width: 1200px;
  }
  .form-box {
    display: grid;
    label {
      grid-area: label;
    }
    input {
      grid-area: input;
    }
    grid-template-areas: "label" "input";
  }
  .form-opt {
  }
  .form-box,
  .form-opt {
    display: grid;
    padding: 1rem;
    width: 60%;
    margin: 0 auto;
    place-self: center;
    input,
    select {
      margin: 0;
      height: 3rem;
    }
  }
  p,
  h3 {
    text-align: center;
    margin-top: 2rem;
    font-size: 1.6rem;
  }
  .d6 {
    display: grid;
    text-align: center;
    label {
      margin: 1rem 0;
    }
    textarea {
      height: 15rem;
      width: 50%;
      place-self: center;
    }
  }
  @media (max-width: 980px) {
    .publish_frete-container {
      label {
      }
      .d1,
      .d2,
      .d3 {
        :not(label, p) {
        }
        div {
          display: grid;
          align-items: unset;
        }
      }
      .d4,
      .d5,
      .d6 {
        div {
          display: grid;
          align-items: unset;
        }
      }
    }
  }
  @media (max-width: 700px) {
    .publish_frete-container {
      grid-template-columns: 1fr;
      margin: 0;
      margin-bottom: 3rem;
    }
    .btn-container {
      margin-bottom: 5rem;
    }
    .d6 {
      padding: 1rem;
      textarea {
        width: 100%;
      }
    }
  }
  @media (max-width: 470px) {
    .publish_frete-container {
      .d1,
      .d2,
      .d3,
      .d4,
      .d5 {
        margin-left: 4rem;
      }
    }
  }
  @media (max-width: 360px) {
    .publish_frete-container {
      .d1,
      .d2,
      .d3,
      .d4,
      .d5 {
        padding-right: 0;
        & > *:not(p) {
          margin-left: 2rem;
        }
      }
      textarea {
        margin: 0 !important;
      }
    }
  }
  .btn-container {
    display: grid;
    margin-top: 3rem;
    #submit-btn {
      margin-bottom: 3rem;
      place-self: center;
    }
  }
`;
