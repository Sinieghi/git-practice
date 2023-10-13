import { styled } from "styled-components";
export const Wrapper = styled.div`
  .popup_content,
  .popup_content-links,
  .popup_content-form,
  .popup_content-actions,
  .popup_content-admin-link {
    position: fixed;
    display: grid;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    visibility: hidden;
    /* display: none; */
    z-index: 9999;
    transition: all 0.3s;
  }

  .popup_content-display-actions-admin-link,
  .popup_content-display-form,
  .popup_content-display-links,
  .popup_content-display-form-message {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    /* display: none; */
    border-radius: 3px;
    transform: scale(0.3);
    transition: all 0.5s 0.2s;
  }
  .popup_content-display-form,
  .popup_content-display-form-message {
    place-self: center;
    height: 35rem;
    width: 50%;
    background-color: var(--white);
    box-shadow: var(--shadow-4);
  }
  .popup_content-display-form-message {
    height: 50rem;
    box-shadow: var(--shadow-cus-white);
  }
  .popup_content-display-links {
    justify-self: center;
    margin-top: 20%;
    width: 30%;
    height: 20rem;
    background-color: var(--white);
    box-shadow: var(--shadow-4);
  }
  .popup_content-display-actions {
    justify-self: center;
    margin-top: 20%;
    width: 30%;
    height: 20rem;
    background-color: var(--white);
    box-shadow: var(--shadow-4);
  }
  .show {
    visibility: visible;
    opacity: 1;
    /* display: grid; */
  }
  .show_contente {
    visibility: visible;
    /* display: block; */
    opacity: 1;
    transform: scale(1);
  }
  @media (max-width: 900px) {
    .popup_content-display-form,
    .popup_content-display-links,
    .popup_content-display-form-message {
      width: 100%;
    }
  }

  //forms structure
  .forms__content {
    height: 100%;
    padding: 5rem;
    position: relative;

    .close {
      position: absolute;
      right: 5px;
      top: 5px;
    }
    .input__container {
      :first-child {
        height: 3.7rem;
        align-items: center;
      }
      .form-box {
        display: grid;
        grid-template-columns: 0.3fr 1fr;
        align-items: center;
        .check_stops {
          height: 2rem;
          width: 2rem;
          margin-left: 8px;
        }
        input {
          width: 20rem;
        }
        label {
          align-self: center;
          font-size: 1.4rem;
          padding: 9px;
        }
      }
    }
    .msg {
      display: grid;
      text-align: center;
      #text {
        justify-self: center;
        width: 60%;
      }
    }
    .button {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      .submit_btn {
        width: 14rem;
        height: 4rem;
        border: 3px;
        background-color: var(--primary-300);
        font-size: 2rem;
      }
    }
  }

  //links structure

  .popup__links-container {
    height: 100%;
    position: relative;
    display: grid;
    padding: 1rem;
    text-align: center;
    .content__description {
      place-self: center;
      font-size: 1.7rem;
      font-weight: 200;
      letter-spacing: 1px;
    }
    .content__description-text {
    }
    .content__description-link {
    }
    .link__for_update-sub {
      color: var(--red-org);
      text-transform: capitalize;
      letter-spacing: 1px;
    }
    #cl {
      position: absolute;
      right: 5px;
      font-size: 3.2rem;
    }
  }
  .action-description {
    text-align: center;
    margin-bottom: 4rem;
  }
`;
