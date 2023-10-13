import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import AboutAside from "../component/AboutAside";

const AboutPage = () => {
  return (
    <>
      <Wrapper>
        <AboutAside />
        <div className="set-padding">
          <div
            className="arrow-aside-content"
            onClick={() => {
              document.querySelector(".aside").classList.toggle("show-links");
            }}
          >
            <div className="arrow-content-aside"></div>
          </div>
          <Outlet />
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  position: relative;
  .set-padding {
    padding: 5rem;
    grid-area: set;
  }
  .aside {
    grid-area: aside;
  }
  grid-template-areas: "aside set";
  min-height: 100vh;
  display: grid;
  grid-template-columns: 300px auto;

  .heading_text {
    margin: 0 auto;
  }
  h1 {
    font-size: 2rem;
    color: var(--red-org);
    p,
    span {
      margin-top: 2rem;
      font-size: 1.5rem;
      color: var(--grey-700);
    }
  }
  .hours {
    color: var(--blue-ocn);
  }
  .title {
    width: 100%;
    margin-top: 4rem;
    text-align: center;
  }
  .signature_basic,
  .number_basic {
    color: var(--primary-300);
  }
  .signature_advanced,
  .number_advanced {
    color: var(--red-org);
  }
  .signature_premium,
  .number_premium {
    color: var(--yellow-org);
  }
  a {
    text-decoration: underline;
    color: var(--dark-bl);
  }
  .active {
    color: var(--blue-ocn);
  }
  .close {
    display: none;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas: "set";
    .close {
      display: flex;
    }
    .aside {
      z-index: -1;
      visibility: hidden;
      opacity: 0;
      position: fixed;
      left: -500px;
      transition: all 0.3s ease;
    }
    .show-links {
      z-index: 10;
      visibility: visible;
      opacity: 1;
      left: 0;
    }
    .arrow-aside-content {
      width: 3rem;
      height: 3rem;
      position: fixed;
      border-radius: 50%;
      background-color: var(--white);
      display: grid;
      place-content: center;
      left: 1%;
      cursor: pointer;
      animation: bounce-left 1s infinite;
      z-index: 5;
      padding-right: 1rem;
      top: 40%;
    }
    .arrow-content-aside {
      height: 2px;

      &::after,
      &::before {
        content: "";
        height: 2px;
        width: 1.5rem;
        background-color: var(--blue-ocn);
        position: absolute;
        transform-origin: left;
        margin-left: -1px;
      }
      &::after {
        transform: rotate(-45deg);
      }
      &::before {
        transform: rotate(45deg);
      }
    }
    @keyframes bounce-left {
      0%,
      100% {
        transform: translateX(0);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }
      50% {
        transform: translateX(-25%);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }
  @media (max-height: 650px) {
    .links-container {
      row-gap: 1rem;
    }
  }
`;

export default AboutPage;
