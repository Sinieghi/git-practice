import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../feature/userSlice/userSlice";
import ClientAside from "../component/ClientAside";
import { Wrapper } from "../assets/Wrappers/SidebarMenus";

const Sidebar = ({ pathname }) => {
  const { isSidebarMenuOpen, isProfileSideBarOpen } = useSelector(
    (store) => store.user
  );
  const { userData } = useSelector((store) => store.userData);
  const dispatch = useDispatch();
  return (
    <>
      {isSidebarMenuOpen ? (
        <Wrapper className="sidebar">
          {isProfileSideBarOpen ? (
            <ClientAside className="mobile-settings" />
          ) : null}
          <input type="hidden" name="" />
          <div className="side-bar-close">
            <button
              className="close"
              id="cl"
              onClick={() => dispatch(closeSidebar())}
            >
              &times;
            </button>
            <h2>onFrete</h2>
          </div>
          <NavLinks userData={userData} pathname={pathname} />
          {/* Client links */}
        </Wrapper>
      ) : null}
    </>
  );
};

export default Sidebar;
