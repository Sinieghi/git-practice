import { styled } from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 8rem 0;
  .plan {
    margin: 0 auto;
    box-shadow: var(--shadow-4);
    height: 500px;
    width: 70%;
  }
  .title {
    grid-area: title;
    text-align: center;
    padding-top: 2rem;
    h2,
    h3 {
      font-size: 2rem;
    }
    h3 {
      margin-top: 2rem;
    }
  }
  a {
    color: var(--red-org);
    font-size: 1.6rem;
    font-weight: 600;
  }
  .links {
    display: flex;
    grid-area: links;
    align-items: center;
    justify-content: center;

    :not(:first-child) {
      margin-left: 2rem;
    }
  }
  .text_content {
    grid-area: text_content;
  }
  .forms {
    grid-area: forms;
    display: grid;
    .update {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .submit__subscription-0,
    .submit__subscription-1,
    .submit__subscription-2 {
      margin: 0 auto;
      font-size: 2rem;
      height: 5rem;
      border-radius: 50px;
      border: transparent;
      text-align: center;
    }
  }
  .know__more {
    width: 12rem;
    padding: 1rem;
  }
  .plan__description-containers {
    height: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.7fr 1fr 1fr;
    grid-template-areas:
      "title title"
      "forms text_content"
      "links text_content";
    p {
      font-weight: 600;
    }
    p,
    label {
      font-size: 1.9rem;
      color: var(--grey-700);
      letter-spacing: 1px;
      text-transform: capitalize;
    }
    .input {
      height: 5rem;
    }
    label {
      margin-left: 1.5rem;
    }
    @media (max-width: 1110px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      .submit__subscription-0,
      .submit__subscription-1,
      .submit__subscription-2 {
        width: 60%;
        padding: 0;
      }
    }
  }
  @media (max-width: 700px) {
    //paddin referente ao texto domain/planos

    .plan {
      width: 100%;
    }
  }
  .background_img {
    border-radius: 3px;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
  .plan__decription-basic {
    background-image: linear-gradient(
        105deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.9) 50%,
        transparent 60%
      ),
      url("/truck-2.jpeg");
    background-position: 50% 40%;
    p {
      color: var(--blue-ocn);
    }

    h2,
    h3 {
      color: var(--primary-400);
    }
  }
  .plan__decription-advanced {
    background-position: 50% 50%;
    background-image: linear-gradient(
        130deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.9) 40%,
        transparent 60%
      ),
      url("/truck-1.jpeg");

    h2,
    h3 {
      color: var(--red-org);
    }
  }
  .plan__decription-premium {
    background-image: linear-gradient(
        130deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.9) 50%,
        transparent 60%
      ),
      url("/truck-3.jpeg");
    background-position: 50% 50%;

    h2,
    h3 {
      color: var(--yellow-org);
    }
  }
  .at_delete_process {
    position: absolute;
    right: 50%;
    left: 50%;
    transform: translate(-50%);
    margin-top: 20rem;
  }
`;

export const SubscriptionBtnWrapper = styled.div`
  button {
    letter-spacing: 2px;
  }
  .submit__subscription-0 {
    background-color: var(--primary-400);
  }
  .submit__subscription-0::after {
    background-color: var(--primary-600);
  }
  .submit__subscription-1 {
    background-color: var(--red-org);
  }
  .submit__subscription-1::after {
    background-color: var(--red-org);
  }
  .submit__subscription-2 {
    background-color: var(--yellow-org);
  }
  .submit__subscription-2::after {
    background-color: var(--yellow-org);
  }
`;
