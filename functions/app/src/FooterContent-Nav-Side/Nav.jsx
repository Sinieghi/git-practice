/* eslint-disable react/prop-types */
import { FaFilter } from "react-icons/fa";
import NavLinks from "./NavLinks";
import { useSelector } from "react-redux";
import { Wrapper } from "../assets/Wrappers/NavMenu";
import { openSidebar, showAsideFilters } from "../utils/asideOpenEvent";

const Nav = ({ pathname }) => {
  let { userData } = useSelector((store) => store.userData);
  let { isSidebarOpen } = useSelector((store) => store.allFretes);
  return (
    <Wrapper className="nav">
      <div
        className="icon-container"
        onClick={() => {
          openSidebar(true);
        }}
      >
        <span className="mobile-device"></span>
      </div>

      {pathname === "/frete_page" ? (
        <FaFilter type="button" onClick={() => showAsideFilters(true)} />
      ) : null}
      <div className="logo">
        <div className="logo-body"></div>
      </div>
      <NavLinks
        userData={userData}
        pathname={pathname}
        isSidebarOpen={isSidebarOpen}
      />
    </Wrapper>
  );
};

export default Nav;
