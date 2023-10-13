import { styled } from "styled-components";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";
import { openSidebar } from "../utils/asideOpenEvent";

const MenuComponent = () => {
  const { pathname } = useLocation();
  appendColorForMenuLinks(pathname);
  return (
    <Wrapper style={{ height: "64px", zIndex: "2" }}>
      <Nav pathname={pathname} />
      <div
        className="menu-shade-background"
        onClick={() => {
          openSidebar(true);
        }}
      ></div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 64px;
  background-color: var(--white);
  .nav {
    position: fixed;
    grid-area: nav;
    z-index: 7;

    background-color: var(--white);
    width: 100%;
  }
  .sidebar {
    grid-area: sidebar;
  }
  .closing-on-click {
    grid-area: closing-on-click;
  }
  grid-template-columns: 360px auto;
  grid-template-rows: 64px auto;
  grid-template-areas:
    "nav nav"
    "sidebar closing-on-click";
  .page-target {
    color: var(--yellow-org) !important;
  }
  .menu-shade-background {
    display: none;
    width: 100vw;
    height: 100%;
    position: fixed;
    background-color: var(--cus-shade-for-aside-menu);
    z-index: 5;
  }
  .target-shade {
    display: block;
  }
  svg {
    font-size: 4rem;
    color: var(--blue-ocn);
    position: absolute;
    right: 2rem;
    cursor: pointer;
    display: none;
  }
  @media (max-width: 1100px) {
    svg {
      display: block;
    }
  }
`;
// setTimeout(() => {
//   const navbar = document.querySelector(".navbar-content");
//   navbar?.addEventListener("click", function (e) {
//     if (navbar.querySelector(".page-target")) {
//       navbar.querySelector(".page-target").classList.remove("page-target");
//     }
//     e.target.classList.remove("page-target");
//     e.target.closest("a").classList.toggle("page-target");
//   });
// });
export default MenuComponent;

function appendColorForMenuLinks(pathname) {
  setTimeout(() => {
    const homePage = document.querySelector(".homepage-link");
    const freightPage = document.querySelector(".freight-page-link");
    const publishContent = document.querySelector(".publish-link");
    const aboutPage = document.querySelector(".about-link");
    const supportPage = document.querySelector(".support-link");
    const profilePage = document.querySelector(".profile-link");
    if (pathname === "/") {
      homePage?.classList.add("page-target");
      freightPage?.classList.remove("page-target");
      publishContent?.classList.remove("page-target");
      aboutPage?.classList.remove("page-target");
      supportPage?.classList.remove("page-target");
      profilePage?.classList.remove("page-target");
    }
    if (pathname === "/frete_page") {
      freightPage?.classList.add("page-target");
      homePage?.classList.remove("page-target");
      publishContent?.classList.remove("page-target");
      aboutPage?.classList.remove("page-target");
      supportPage?.classList.remove("page-target");
      profilePage?.classList.remove("page-target");
    }
    if (pathname === "/create-frete") {
      publishContent?.classList.add("page-target");
      homePage?.classList.remove("page-target");
      freightPage?.classList.remove("page-target");
      aboutPage?.classList.remove("page-target");
      supportPage?.classList.remove("page-target");
      profilePage?.classList.remove("page-target");
    }
    if (pathname === "/about_page") {
      aboutPage?.classList.add("page-target");
      homePage?.classList.remove("page-target");
      freightPage?.classList.remove("page-target");
      publishContent?.classList.remove("page-target");
      supportPage?.classList.remove("page-target");
      profilePage?.classList.remove("page-target");
    }
    if (pathname === "/suporte_cliente") {
      supportPage?.classList.add("page-target");
      homePage?.classList.remove("page-target");
      publishContent?.classList.remove("page-target");
      aboutPage?.classList.remove("page-target");
      profilePage?.classList.remove("page-target");
      freightPage?.classList.remove("page-target");
    }
    if (pathname.toString().split("/")[1] === "client_page") {
      profilePage?.classList.add("page-target");
      homePage?.classList.remove("page-target");
      publishContent?.classList.remove("page-target");
      aboutPage?.classList.remove("page-target");
      supportPage?.classList.remove("page-target");
      freightPage?.classList.remove("page-target");
    }
  });
}
