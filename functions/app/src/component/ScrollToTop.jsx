import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    // document.documentElement.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: "smooth", // Optional if you want to skip the scrolling animation
    // });
    // if (pathname === "/create-frete") {
    //   document.querySelector(".message-popup")?.remove();
    //   document.querySelector(".sing-in-popup")?.remove();
    // }
  }, [pathname]);

  return null;
}
export function scrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    if (pathname === "/frete_page") {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // Optional if you want to skip the scrolling animation
      });
    }
  }, [pathname]);

  return null;
}
