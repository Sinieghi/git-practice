import React from "react";
import { styled } from "styled-components";
import { hideWraningOnHover, showWraningOnHover } from "../utils/msgOnHover";
let left;
let text = "";
let isHist = false;
let fixes = "";
const CheckBoxAnimation = ({ freteId, isConcluded, handle, name, index }) => {
  const searchParamsFix = new URLSearchParams(window.location.pathname);
  if (Boolean(searchParamsFix?.toString()?.match("historico-fretes"))) {
    fixes = searchParamsFix?.toString()?.match("historico-fretes")[0];
  } else {
    fixes = "";
  }
  if (fixes === "historico-fretes") {
    isHist = true;
    text = "Reativar documento";
    left = "90%";
  } else {
    isHist = false;
    text = "Mover documento para o histórico";
    left = "2%";
  }
  return (
    <Wrapper
      className={`check-in-input`}
      onMouseEnter={() => {
        showWraningOnHover(index, isHist);
      }}
      onMouseLeave={() => hideWraningOnHover(index, isHist)}
      style={{ left: left }}
    >
      <div
        className={
          isHist
            ? `global-selector check${index}-hist`
            : `global-selector check${index}`
        }
      >
        <p className="ballon-text">{text}</p>
      </div>
      <svg className="check-bcg" viewBox="0 0 24 24">
        <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" />{" "}
      </svg>
      <p className="check-bcg"></p>
      <input
        type="checkbox"
        className="check-in-input"
        id={freteId}
        checked={isConcluded}
        onChange={handle}
      />
      <div className="wrapper">
        {" "}
        <svg className="animated-check" viewBox="0 0 24 24">
          <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" />{" "}
        </svg>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: grid;
  position: relative;
  position: absolute;
  height: 3rem;
  width: 3rem;
  left: 2%;
  top: 2%;
  cursor: pointer;
  input {
    display: none;
  }
  .check-bcg {
    stroke: #7ac142;
    position: absolute;
  }
  .animated-check {
    position: absolute;
    top: 0;
    svg {
      cursor: pointer;
      background-color: var(--grey-200);
    }
  }
  input:checked + .wrapper {
    .animated-check path {
      fill: none;
      stroke: #7ac142;
      stroke-width: 4;
      stroke-dasharray: 23;
      stroke-dashoffset: 23;
      animation: draw 0.3s linear forwards;
      stroke-linecap: round;
      stroke-linejoin: round;
      cursor: pointer;
    }
  }
  .global-selector {
    visibility: hidden;
    opacity: 0;
    transition: show-us 0.3s ease;
  }
  @keyframes draw {
    to {
      stroke-dashoffset: 0;
      visibility: visible;
      opacity: 1;
    }
  }
  .ballon_text-container-check-1,
  .ballon_text-container-check-2,
  .ballon_text-container-check-3,
  .ballon_text-container-check-4,
  .ballon_text-container-check-5,
  .ballon_text-container-check-6 {
    position: relative;
    position: absolute;
    top: 100%;
    height: 8rem;
    width: 24rem;
    display: table;
    padding-top: 2rem;
    background: var(--green-light);
    border-radius: 3px;
    visibility: visible;
    opacity: 1;
    clip-path: polygon(
      9% 0,
      24% 24%,
      100% 25%,
      100% 100%,
      0 100%,
      0 24%,
      9% 24%
    );
  }
  .ballon-text {
    font-size: 1.3rem;
    text-align: center;
    margin-top: 2rem;
    font-weight: 500;
  }
  .ballon_text-container-check-1-hist,
  .ballon_text-container-check-2-hist,
  .ballon_text-container-check-3-hist,
  .ballon_text-container-check-4-hist,
  .ballon_text-container-check-5-hist,
  .ballon_text-container-check-6-hist {
    position: relative;
    position: absolute;
    height: 8rem;
    width: 24rem;
    display: table;
    padding-top: 2rem;
    top: 100%;
    right: -100%;
    z-index: 99;
    background: var(--red-light);
    border-top-left-radius: 9px;
    border-top-right-radius: 3px;
    visibility: visible;
    opacity: 1;
    border-radius: 3px;
    clip-path: polygon(
      80% 0,
      82% 23%,
      100% 24%,
      100% 100%,
      0 100%,
      0 24%,
      74% 23%
    );
  }
`;

export default CheckBoxAnimation;
