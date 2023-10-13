import { styled } from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;

  .single__frete-content {
    overflow-x: hidden;
    display: grid;
    position: relative;

    .text-content {
      grid-area: text-content;
      padding: 10rem 15rem;
      span {
        color: var(--grey-700);
      }
      h3 {
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 400;
        letter-spacing: 1px;
        color: var(--dark-bl);
      }
    }
    .show__case-content {
      position: relative;
      grid-area: shows;
      width: 100%;
      border-radius: 0;
      background: var(--white);
    }
    .single-content {
      position: relative;
      grid-area: single;
    }
    .client_frete-container {
    }
    grid-template-columns: 1fr 0.5fr;
    grid-template-rows: 1fr;
    grid-template-areas: "single shows";
    .pagination {
      width: 35rem;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
    }
    @media (max-width: 1100px) {
      .text-content {
        padding: 5rem 10rem;
      }
    }
    @media (max-width: 920px) {
      display: grid;
      grid-template-columns: 1fr;
      .single-content {
        width: 100%;
        display: grid;
        place-content: center;
        grid-column: 1 / 3;
        .text-content {
          padding-top: 20rem;
        }
      }
      .close,
      .show_cliente-showcase {
        visibility: visible;
        opacity: 1;
      }
      .show__case-content {
        visibility: hidden;
        transform: translate(600px);
        opacity: 0;
        transition: all 500ms ease-in;
      }
      .show-more {
        transform: translate(0);
        visibility: visible;
        opacity: 1;
      }

      @keyframes hidecase {
        0% {
          transform: translate(0);
        }
        100% {
          transform: translate(500px);
          display: none;
        }
      }
    }

    @media (max-width: 490px) {
      .show_cliente-showcase {
        font-size: 1.1rem;
        right: 1rem;
      }
    }
  }
  p,
  h5,
  h4,
  .email-container {
    color: var(--grey-700);
    font-size: 1.9rem;
    margin-top: 1rem;
  }
  .email {
    color: var(--clr-primary-orange-5);
  }
  .close {
    visibility: hidden;
    opacity: 0;
    transition: all 0.4s ease;
  }
  .show__case-content {
    .shocase__container {
      display: grid;
      place-content: center;
      .pagination {
        right: 5%;
        bottom: 1%;
      }
    }
  }
  .show_cliente-showcase {
    position: absolute;
    top: 10rem;
    right: 10rem;
    visibility: hidden;
    opacity: 0;
    transition: all 0.4s ease;
    background-color: transparent;
    border: transparent;
    color: var(--red-org);
    font-size: 1.6rem;
  }
  .register-userData {
    position: absolute;
    bottom: 1%;
    left: 5%;
    a {
      color: var(--red-org);
    }
  }
`;
