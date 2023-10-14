import { styled } from "styled-components";

const WarningBallonsInpts = ({ msg, index }) => {
  return (
    <Wrapper className={`warn_ballon-inp${index}`}>
      <p className="text__content-onClick">{msg}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  display: grid;
  place-content: center;
  visibility: hidden;
  padding: 1rem;
  opacity: 0;
  position: absolute;
  height: 8rem;
  bottom: 4rem;
  right: 52.9rem;
  transition: all 0.3s ease;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    55% 75%,
    50% 100%,
    45% 75%,
    0% 75%
  );
  .text__content-onClick {
    margin-bottom: 2rem;
  }

  .show_the-ballon {
    visibility: visible;
    opacity: 1;
  }
`;
export default WarningBallonsInpts;
