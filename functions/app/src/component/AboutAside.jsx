import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const AboutAside = () => {
  const { pathname } = useLocation();
  setTimeout(() => {
    targetCurrentLink(pathname);
  });
  return (
    <Wrapper className="aside">
      <button
        type="button"
        onClick={() => {
          document.querySelector(".aside").classList.toggle("show-links");
        }}
        className="close"
        id="cl"
      >
        &times;
      </button>
      <div className="links-container">
        <h2>Veja também</h2>
        <div className="links">
          <Link className="about-links" to="futuro">
            Sobre o nosso futuro
          </Link>
        </div>
        <div className="links">
          <Link className="about-links" to="propostas">
            Propostas
          </Link>
        </div>
        <div className="links">
          <Link className="about-links" to="regras">
            Regras
          </Link>
        </div>
        <div className="links">
          <Link className="about-links" to="sobre-cookie">
            Sobre os cookies
          </Link>
        </div>
        <div className="links">
          <Link className="about-links" to="empresario">
            Cargo empresario
          </Link>
        </div>
        <div className="links">
          <Link className="about-links" to="entregador">
            Cargo entregador
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: var(--white);
  height: 100%;
  padding: 5rem;
  box-shadow: var(--shadow-2);
  .links-container {
    display: grid;
    row-gap: 5rem;
    a {
      text-decoration: none;
      color: var(--red-org);
      font-size: 1.5rem;
    }
    .current-target {
      color: var(--dark-bl);
    }
  }
  .close {
    position: absolute;
    right: 1%;
    top: 1%;
  }
`;
export default AboutAside;

function targetCurrentLink(pathname) {
  const queryAll = document.querySelectorAll(".about-links");
  queryAll.forEach((elements, index) => {
    elements.addEventListener("click", (ele) => {
      ele.target.classList.add("current-target");
    });
    if (
      pathname.toString().split("/")[2] !==
      elements.href.split("/").slice(-1).toString()
    ) {
      queryAll[index].classList.remove("current-target");
    }
  });
}
