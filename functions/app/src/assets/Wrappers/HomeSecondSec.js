import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 5rem;
  height: 100%;
  display: grid;
  align-content: center;
  .second__box-content {
    grid-template-rows: 6rem 1fr;
    padding: 4rem;

    h1 {
      margin-top: 3rem;
      height: 4rem;
      width: 100%;
      text-align: center;
      font-size: 3rem;
      letter-spacing: 1px;
      display: grid;
      place-content: center;
    }
    .in-line_box {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin-top: 8rem;
      column-gap: 4rem;
      h1 {
        font-size: 2.3rem;
      }
      .text-eff {
        p {
          font-size: 1.7rem;
          margin-top: 3rem;
          width: 100%;
          padding: 2rem;
          margin: 0 auto;
          margin-top: 2rem;
          margin-bottom: 3rem;
        }
        transition: all 0.3s ease;
      }
      .text-eff:hover {
        box-shadow: var(--shadow-3);
      }
    }
  }
`;
