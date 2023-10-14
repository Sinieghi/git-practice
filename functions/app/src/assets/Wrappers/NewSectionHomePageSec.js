import styled from "styled-components";

export const NewSectionHomePageSec = styled.section`
  margin-top: 5rem;
  min-height: 50rem;
  background-color: #f6f6f6;
  .new-section-sec {
    display: grid;
    grid-template-columns: 0.7fr 1fr;
    margin-top: 5rem;
    padding: 4rem;
    width: 100%;
    height: 100%;
  }
  .left-sec {
    width: 80%;
    display: grid;
    grid-template-rows: 0.2fr 1fr;
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 2rem;
    }
  }
  .image {
    background-position: center;
    background-size: cover;
    background-image: linear-gradient(
        130deg,
        var(--color-cus-new-sec) 0%,
        var(--color-cus-new-sec) 50%
      ),
      url("/boxes-5.jpeg");
    width: 100%;
    height: 100%;
    border-radius: 9px;
    transition: all 0.3s ease;
    &:hover {
      border-radius: 3px;
    }
  }
`;
