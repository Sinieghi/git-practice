import { styled } from "styled-components";
export const Wrapper = styled.form`
  .input,
  input,
  select {
    background: white;
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    color: var(--grey-700);
    background-color: rgba(white, 0.5);
    border: 1px solid var(--grey-700);
    transition: all 0.3s;
    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      border-bottom: 3px solid var(--primary-300);
    }
    &:focus:invalid {
      color: var(--red-org);
      border-bottom: 3px solid var(--red-org);
    }
    &::-webkit-input-placeholder {
      color: var(--grey-900);
    }
  }

  // optional for no visible labels, this is for the class who is optional for form-box on Forms component
  .animated-label {
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
  }
  .input:placeholder-shown ~ .animated-label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-1rem);
  }

  //animation for inputs who fail on the mission
  .target-fail {
    background-color: var(--red-light);
    position: relative;
    visibility: visible;
    opacity: 1;
  }
  .target-success {
    background-color: var(--primary-200);
  }
`;

//DEPOIS DISSO IMPLEMENTAR OS CLOSE COM ESC NAO ESQUECER
