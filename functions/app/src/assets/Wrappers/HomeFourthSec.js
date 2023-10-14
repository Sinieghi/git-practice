import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  align-items: center;
  background-color: #f6f6f6;
  min-height: 90rem;
  margin-top: -10rem;
  .fourth-content {
    h1 {
      text-align: center;
      margin: 5rem 0 5rem 0;
      font-size: 3rem;
    }
    p {
      display: grid;
      place-content: center;
      font-size: 1.7rem;
    }

    .card-explain {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
    }
    .img-container {
      display: grid;
      place-content: center;
      margin-top: 4rem;
      box-shadow: var(--shadow-1);
      width: 25rem;
      height: 25rem;
      padding: 2rem;
      position: relative;
      cursor: pointer;
      p,
      .card-description {
        font-size: 1.3rem;
        visibility: hidden;
        opacity: 0;
        transition: all 0.4s 0.4s ease;
        text-align: center;
      }
      .imgs {
        width: 15rem;
        height: 15rem;
        place-self: center;
        transition: all 0.4s 0.4s ease;
        position: absolute;
      }
    }
    .img-container:hover {
      .card-description {
        visibility: visible;
        opacity: 1;
      }
      .imgs {
        visibility: hidden;
        opacity: 0;
      }
    }
    .target {
      .card-description {
        visibility: visible;
        opacity: 1;
      }
      .imgs {
        visibility: hidden;
        opacity: 0;
      }
    }
  }
`;
