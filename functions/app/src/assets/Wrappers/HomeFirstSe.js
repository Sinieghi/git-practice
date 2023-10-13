import styled from "styled-components";

export const Wrapper = styled.section`
  height: 100vh;
  background-image: 
  /* linear-gradient(
      130deg,
      var(--color-cus-head) 0%,
      var(--color-cus-head) 50%
    ), */ url("/road-4.jpeg");
  background-position: center;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  .first__box-content {
    height: 100%;
    padding: 4rem;
    display: grid;
    position: relative;
    background-color: transparent;
    width: 100%;
    h1,
    h2,
    p,
    .link-plan {
      background-color: var(--white) !important;
      color: var(--grey-900) !important;
      background-clip: text;
      -moz-background-clip: text;
      -webkit-background-clip: text;
      font-size: 3rem;
    }

    h1 {
      font-size: 6rem;
      letter-spacing: 1px;
      stroke: 2px var(--color-cus-head);
      -webkit-text-stroke: 2px var(--yellow-org);

      p,
      .break__limit-para {
        stroke: 0;
        -webkit-text-stroke: 0.5px;
        -webkit-text-fill-color: var(--white);
      }
    }

    color: var(--white);
    .welcome-header {
      font-size: 8rem;
      text-align: center;
      letter-spacing: 2rem;
      background-color: transparent;
      font-weight: 500;
      display: flex;
      place-content: center;
      color: var(--grey-900);
      .on {
        /* font-family: "Supreme", sans-serif; */
        font-family: "Recia", serif;
        font-family: "Telma", cursive;
        font-size: 5rem;
        display: grid;
        place-content: end;
      }
    }
    .sell_content-first-sec {
      margin-top: 5rem;
      padding: 0 10rem;
      /* display: grid;
      .break__limit {
        grid-area: break__limit;
      }
      .plan_infos-first-sec {
        grid-area: plan_infos-first-sec;
      }
      .image-box {
        grid-area: image-box;
      } */
      display: flex;
      flex-direction: column;

      .break__limit {
        .break__limit-para {
          font-size: 2rem;
          font-weight: 200;
          margin-top: 1rem;
        }
      }
      /* .image-box {
        position: absolute;
        right: 10rem;
        display: none;
        top: 0;
        width: 50rem;
        height: 100%;
        width: 100%;
        background-size: cover;
        background: no-repeat;
        border-radius: 20px;
        transition: all 0.3s ease;
      } */
      .image-box:hover {
        border-radius: 3px;
      }
      /* -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
      clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%); */
      h2 {
        font-size: 3rem;
        font-weight: 500;
      }
      .plan_infos-first-sec {
        margin-top: 1rem;
      }
      .break__limit,
      .plan_infos-first-sec {
      }
    }
    .plans_first-sec {
      display: grid;
      text-align: center;
      margin-top: 4rem;
      p {
        margin-top: 4rem;
        font-size: 3rem;
      }
      .plan_first-sec-link {
        font-size: 2rem;
        width: 25rem;
        height: 7.5rem;
        padding: 2.2rem;
        background-color: var(--clr-primary-orange-6);
        color: var(--white);
        place-self: center;
        margin-top: 8rem;
        margin-bottom: 2rem;
      }
    }
  }
  .bounce_animation {
    display: grid;
    margin-top: 4rem;
    position: absolute;
    bottom: -3.7rem;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .arrow__animation {
    place-self: center;
    width: 5rem;
    height: 5rem;
    background-color: transparent;
    display: grid;
    place-content: center;
    border: transparent;
    animation: bounce 1s infinite;
  }
  .arrow__animation::before,
  .arrow__animation::after {
    content: "";
    width: 2px;
    height: 3rem;
    background-color: #000000;
    border-radius: 30px;
    backface-visibility: hidden;
    margin: -0.49998px;
    position: absolute;
    background-color: var(--white);
    top: 1.25rem;
  }
  .arrow__animation::after {
    transform: rotate(45deg);
    transform-origin: left;
    right: 1.4rem;
  }
  .arrow__animation::before {
    transform: rotate(-45deg);
    transform-origin: right;
    left: 1.4rem;
  }
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;
