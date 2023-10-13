import styled from "styled-components";

export const NewSectionHomePage = styled.section`
  background-color: var(--color-cus);
  width: 100vw;
  min-height: 100vh;
  margin-top: -10rem;
  display: grid;
  place-content: center;
  .new-section {
    padding: 5rem;
    .title-container {
      grid-area: heading;
    }
    .text-side {
      grid-area: texts;
      width: 100%;
    }
    .content-right-side {
      grid-area: right-side;
      display: flex;
      row-gap: 3rem;
      gap: 2rem;
    }
    h2,
    p,
    h3,
    a {
      background-clip: text;
      -moz-background-clip: text;
      -webkit-background-clip: text;
      background-color: var(--white);
      color: transparent;
      letter-spacing: 1px;
    }
    h2,
    p,
    h3 {
      font-size: 3rem;
      text-align: center;
      margin-bottom: 8rem;
      background-color: var(--white);
    }
    a {
      color: var(--red-org);
    }
    .title {
      background-color: var(--yellow-org);
    }
    h3 {
      font-size: 2rem;
    }
    .text-side {
      display: flex;
      gap: 2rem;
      .text-1,
      .text-2 {
        width: 100%;
      }

      .small-title {
        font-size: 2.5rem;
        margin-bottom: 3rem;
        text-align: unset;
      }
      p {
        font-size: 1.6rem;
        text-align: unset;
      }
    }
    .box-2,
    .box-1 {
      height: 15rem;
      width: 100%;
      background-color: var(--color-cus-1);
      border-radius: 5px;
      padding: 2rem;
      h2 {
        text-align: unset;
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1.4rem;
        text-align: unset;
      }
      transition: all 0.3s ease;
      &:hover {
        background-color: var(--color-cus-2);
      }
    }
  }
`;
