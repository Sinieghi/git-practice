import React from "react";
import { styled } from "styled-components";

const CheckMarksAnimations = () => {
  return (
    <Wrapper className="unset__animation">
      <div className="wrapper">
        <span className="check-mark">
          {/* <div className="back_brownd-checkmark"></div> */}
        </span>
      </div>
    </Wrapper>
  );
};
{
  /* <svg class="animated-check" viewBox="0 0 24 24">
  <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" />{" "}
</svg> */
}

const Wrapper = styled.div`
  position: absolute;
  display: none;
  place-self: center;
  place-content: center;
  height: 100%;
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .check-mark {
    width: 2rem;
    height: 2rem;
    position: relative;
    position: absolute;
    display: grid;
    place-content: center;
    border: 1px solid var(--white);
    border-radius: 50%;
    z-index: 5;
    animation: slide-check 3s ease;
    &::before {
      content: "";
      width: 2rem;
      height: 2rem;
      border: 1px solid white;
      border-radius: 50%;
      background-color: #7ac142;
      animation: slide-check-back 3s ease;
    }
    &::after {
      content: "";
      height: 100%;
      width: 100%;
      position: absolute;
      color: white;
      background: var(--white);
      clip-path: polygon(
        21% 44.5%,
        41% 65%,
        78% 33%,
        84% 40%,
        40% 78%,
        14.5% 51%
      );
    }
  }

  @keyframes slide-check {
    0% {
      transform: translateX(-300px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes slide-check-back {
    0% {
      transform: translateX(300px);
      opacity: 0;
    }
    70% {
      transform: translateX(100px);
      opacity: 0;
    }
    90% {
      transform: translateX(10px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

// animação para a check box do freigth
// .checkbox {
//   background: white;
//   display: block;
//   font-size: 10vmin;
//   width: 1em;
//   height: 1em;
//   border: solid 2px grey;
//   position: relative;
//   cursor: pointer;
//   > input {
//     opacity: 0;
//     position: absolute;
//   }
// }
// .check {
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   margin: -3px;
//   clip-path: polygon(0 0, 50% 0, 100% 0, 100% 100%, 50% 100%, 0 100%);

//   border: solid 4px hotpink;

//   transition: 0.4s cubic-bezier(0.8, 0, 0.2, 1);
//   transition-property: background-color, clip-path, border-color;
//   transition-delay: 0.1s, 0s;

//   input:checked + & {
//     // clip-path: polygon(41% 52%, 26% 35%, 10% 51%, 37% 88%, 37% 88%, 37% 88%, 37% 88%, 37% 88%, 91% 33%, 78% 18%);
//     background-color: hotpink;
//     border-color: transparent;
//     transition-delay: 0s;

//     clip-path: polygon(28% 38%, 41% 53%, 75% 24%, 86% 38%, 40% 78%, 15% 50%);
//   }
// }

//   .animated-check {
//     height: 10em;
//     width: 10em;
//   }

//   .animated-check path {
//     fill: none;
//     stroke: #7ac142;
//     stroke-width: 4;
//     stroke-dasharray: 23;
//     stroke-dashoffset: 23;
//     animation: draw 1s linear forwards;
//     stroke-linecap: round;
//     stroke-linejoin: round;
//   }

//   @keyframes draw {
//     to {
//       stroke-dashoffset: 0;
//     }
//   }
export default CheckMarksAnimations;
