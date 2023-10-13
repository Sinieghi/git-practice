import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8rem;
  h1 {
    font-size: 4rem;
  }
  .title-basic {
    color: var(--primary-300);
  }
  .title-advanced {
    color: var(--red-org);
  }
  .title-premium {
    color: var(--yellow-org);
  }
  p {
    margin-top: 4rem;
    font-size: 2rem;
  }
  a {
    font-size: 3rem;
    margin-top: 1rem;
  }
  .link-basic,
  .link-premium,
  .link-advance {
    font-size: 1.4rem;
  }
  .link-basic {
    color: var(--primary-300);
  }
  .link-premium {
    color: var(--yellow-org);
  }
  .link-advance {
    color: var(--red-org);
  }
  .texts {
    display: grid;
    row-gap: 1rem;
    .links-cont {
      display: flex;
      column-gap: 3rem;
      place-content: end;
    }
  }
  .links {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    place-content: center;
  }
  @media (max-width: 480px) {
    padding: 4rem;
    width: 100%;
    overflow-x: hidden;
  }
`;
