import { styled } from "styled-components";

export const Wrapper = styled.main`
  display: grid;
  min-height: 100vh;
  grid-gap: 3px;
  .avaible-cont {
    width: 100%;
    .box {
      width: 100%;
    }
  }

  grid-template-columns: 1fr 325px;
  .filter {
    height: 100%;
    padding: 2rem;
    display: grid;
    row-gap: 9px;
  }
  .aside-mobile-btn {
    display: none;
  }
  .close {
    display: none;
  }
  .article-container {
    position: relative;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    column-gap: 1rem;
    font-size: 1.5rem;
    p {
      margin-top: 5px;
    }
    h5 {
      font-size: 1.6rem;
      color: var(--blue-ocn);
    }
    .contact {
      color: var(--primary-blue-500);
    }
    .price {
      color: var(--primary-500);
    }
    .date {
    }
  }
  @media (max-width: 1250px) {
    .article-container {
      display: grid;

      .user__details {
        grid-area: a;
      }
      .freigth__details-departure {
        grid-area: b;
      }
      .freigth__details-destiny {
        grid-area: c;
      }
      .freigth__details-colect {
        grid-area: d;
      }
      .truck__details {
        grid-area: e;
      }
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-areas:
        "a b d e"
        "a c d e";
    }
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    .avaible-cont {
      row-gap: 5px;
      margin: 0;
      padding: 1rem;
      .box {
        width: 100%;
        margin: 0;
        margin-bottom: 1rem;
      }
    }
    .close {
      display: grid;
    }
    .close-container {
      position: absolute;
      left: -5px;
      top: -5px;
      #cl {
        font-size: 3rem;
      }
    }

    .aside-mobile-btn {
      display: block;
    }
    .aside-cnt {
      visibility: hidden;
      opacity: 0;
      background-color: var(--blue-ocn);
      transform: translateX(600px);
      transition: all 0.5s ease;
      label {
        color: var(--white);
        text-transform: capitalize;
      }
    }
    .active-fil {
      transform: translateX(0);
      visibility: visible;
      opacity: 1;
    }
  }

  @media (max-width: 650px) {
    .article-container {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas:
        "a b d"
        "a c d"
        "e e e";
    }
    .truck__details {
      display: grid;
      margin-top: 2rem;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media (max-width: 550px) {
    .article-container {
      grid-template-columns: 1fr 1fr;
      row-gap: 5px;
      grid-template-areas:
        "a  d"
        "e  b"
        "e  c";
    }
    .truck__details {
      grid-template-columns: 1fr;
    }
  }
  //single
  .single__content {
    background-color: transparent;
    padding: 10rem;
    width: 100%;
  }
  @media (max-width: 420px) {
    .article-container {
      grid-template-columns: 1fr;
      row-gap: 5px;
      grid-template-areas: "a" "e" "e" "d" "b" "c";
    }
    .box {
      div {
        padding: 0;
        margin: 0;
      }
    }
  }

  .back-to-top-content {
    width: 5rem;
    height: 5rem;
    position: fixed;
    border-radius: 50%;
    background-color: var(--red-org);
    display: grid;
    place-content: center;
    left: 5%;
    bottom: 2rem;
    cursor: pointer;
    animation: bounce 1s infinite;
    z-index: 5;
  }
  .backo-to-top {
    width: 2px;
    height: 2rem;
    background-color: var(--blue-ocn);
    &::after,
    &::before {
      content: "";
      width: 2px;
      height: 1.5rem;
      background-color: var(--blue-ocn);
      position: absolute;
      transform-origin: top;
    }
    &::after {
      transform: rotate(-45deg);
    }
    &::before {
      transform: rotate(45deg);
    }
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

  /* &::after, &::before{
    content: '';
    height: ;
  } */
`;
