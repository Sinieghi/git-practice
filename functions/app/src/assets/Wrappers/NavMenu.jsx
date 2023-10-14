import { styled } from "styled-components";

export const Wrapper = styled.div`
  font-size: 1.4rem;
  height: 64px;
  display: flex;
  align-items: center;
  border-radius: 0;
  margin: 0;
  .logo {
    margin: 0 4rem 0 3rem;
    h2 {
      font-size: 1.5rem;
      color: var(--primary-400);
    }
  }
  .navbar-content {
    transition: all 0.3s ease;
  }
  .normal-device {
    width: 100%;
    display: grid;
    place-content: center;
    grid-template-columns: 1fr 1fr;
    .navigation-container {
      display: flex;
      gap: 3rem;
    }
    .client-container {
      display: flex;
      gap: 3rem;
      justify-content: end;
      margin: 0 11rem 0 0;
    }
  }
  .icon-container {
    display: none;
    transform: rotate(180deg);
    transform: rotate(180deg);
    transition: all 0.7s ease;
  }
  .show-aside {
    display: none;
  }
  @media (max-width: 1100px) {
    .icon-container {
      display: grid;
    }
    .mobile-device {
      transition: all 0.5s ease;
    }
    .close-side {
      border-radius: 50%;
      height: 5rem;
    }
    .close-side:hover {
      background-color: var(--grey-200);
    }
    .close-side {
      background-color: var(--white);
      .transform-x {
        backface-visibility: hidden;
        transform-origin: right;
        background-color: transparent;
        background-position: -50px;
        &::before {
          transform: rotate(45deg);
          bottom: 0;
        }
        &::after {
          transform: rotate(-45deg);
          top: 0;
        }
      }
    }
    .logo {
      place-self: center;
      position: absolute;
      margin: 0;

      left: 50%;
      transform: translate(-50%);
    }
    .normal-device {
      visibility: hidden;
      opacity: 0;
      z-index: -5;
      transform: translateX(-1000px);
      background-color: var(--white);
      transition: 0s;
    }
    .show-aside {
      visibility: visible;
      opacity: 1;
      z-index: 1;
      position: fixed;
      height: 100%;
      width: 30rem;
      left: 0;
      top: 64px;
      display: block;
      background-color: var(--white);
      padding-left: 4rem;
      animation: rotate-90 0.3s ease-in;
      transform: translateX(0);

      .navigation-container,
      .client-container {
        display: grid;
        a {
          height: fit-content;
          margin: 3rem 0 3rem 0;
          color: var(--grey-700);
        }
      }
      .navigation-container {
        margin-top: 5rem;
      }
    }
    @media (max-height: 670px) {
      .navbar-content {
        .navigation-container,
        .client-container {
          margin-top: 0;
          a {
            margin: 1rem 0 1rem 0;
          }
        }
      }
    }
  }
`;
