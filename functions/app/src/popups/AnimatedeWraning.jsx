import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { hideBallons, showBallons } from "../utils/popupDisplay";

const AnimatedeWraning = ({ link, icon, text, index }) => {
  return (
    <div className="ballon_container">
      <div
        className={
          index
            ? `ballon-${index} ballon-setup-${index}`
            : "ballon ballon-setup"
        }
      ></div>
      <Wrapper className="set-position" id="ballon">
        <div
          className={
            index
              ? `ballon_text-container-${index} idle-text-${index}`
              : "ballon_text-container idle-text"
          }
          id="text-id"
        >
          {/* dinamic */}
          <p className="ballon_text">{text}</p>
        </div>

        <Link
          className="ballon__animation-on-hover"
          onMouseEnter={() => showBallons({ index })}
          onMouseLeave={() => hideBallons({ index })}
          to={link}
        >
          <div
            className={
              index ? `pulsing__animation-${index}` : "pulsing__animation"
            }
          >
            <i className="warning">{icon}</i>
          </div>
        </Link>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  position: absolute;
  position: relative;
  .pulsing__animation {
    z-index: 901;
    height: 3rem;
    width: 3rem;
    /* background: linear-gradient(var(--clr-primary-orange-2), var(--red-org)); */
    display: grid;
    position: absolute;
    border-radius: 50%;
    margin: auto;
  }
  .ballon__animation-on-hover {
    place-self: center;
    margin-top: 4rem;
    margin-right: 3rem;
  }
  .warning {
    place-self: center;
    font-size: 2rem;
    margin-bottom: 5px;
    z-index: 1;
  }
  .ballon_text-container,
  .ballon_text-container-1,
  .ballon_text-container-2,
  .ballon_text-container-3,
  .ballon_text-container-4,
  .ballon_text-container-5,
  .ballon_text-container-6 {
    text-align: center;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      55% 75%,
      50% 100%,
      45% 75%,
      0% 75%
    );
    transition: all 0.3s ease-in-out;
  }

  .pulsing__animation,
  .pulsing__animation-1,
  .pulsing__animation-2,
  .pulsing__animation-3,
  .pulsing__animation-4,
  .pulsing__animation-5,
  .pulsing__animation-6 {
    opacity: 0.9;
  }

  .pulsing__animation::before,
  .pulsing__animation::after,
  .pulsing__animation-1::before,
  .pulsing__animation-1::after,
  .pulsing__animation-2::before,
  .pulsing__animation-2::after,
  .pulsing__animation-3::before,
  .pulsing__animation-3::after,
  .pulsing__animation-4::before,
  .pulsing__animation-4::after,
  .pulsing__animation-5::before,
  .pulsing__animation-5::after,
  .pulsing__animation-6::before,
  .pulsing__animation-6::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 0;
  }
  .pulsing__animation::before,
  .pulsing__animation-1::before,
  .pulsing__animation-2::before,
  .pulsing__animation-3::before,
  .pulsing__animation-4::before,
  .pulsing__animation-5::before,
  .pulsing__animation-6::before {
    animation: pulse 2s ease-in-out infinite;
  }
  .pulsing__animation::after,
  .pulsing__animation-1::after,
  .pulsing__animation-2::after,
  .pulsing__animation-3::after,
  .pulsing__animation-4::after,
  .pulsing__animation-5::after,
  .pulsing__animation-6::after {
    animation: pulse 2s 1s ease-in-out infinite;
  }
  @keyframes pulse {
    100% {
      transform: scale(1.8);
    }
  }
  .idle-text,
  .idle-text-1,
  .idle-text-2,
  .idle-text-3,
  .idle-text-4,
  .idle-text-5,
  .idle-text-6 {
    visibility: hidden;
    opacity: 0;
  }
  .active-text,
  .active-text-1,
  .active-text-2,
  .active-text-3,
  .active-text-4,
  .active-text-5,
  .active-text-6 {
    visibility: visible;
    opacity: 1;
  }
`;

export default AnimatedeWraning;
