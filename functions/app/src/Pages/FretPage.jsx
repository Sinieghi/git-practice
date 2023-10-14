import { createContext, useContext } from "react";
import { Filter } from "../component";
import { Wrapper } from "../assets/Wrappers/FretePageWrapper";
import { AvailableList as AvailableList, SingleFrete } from "../Frete";
import useEffectFretePage from "../customHooks/useEffectFretePage";
import { scrollToTop } from "../component/ScrollToTop";
import { loading, useEffectForLoading } from "../customHooks/fretePgLoading";

const FretePageContext = createContext();
const FretPage = () => {
  //frete page useEffect
  const {
    isLoading,
    allFretes,
    userData,
    isSingleFreteOpen,
    page,
    firstRenderLoadin,
  } = useEffectFretePage();
  scrollToTop();
  useEffectForLoading(() => {
    loading(isLoading);
  }, [isLoading]);
  return (
    <>
      <FretePageContext.Provider
        value={{ userData, fretes: allFretes, isLoading }}
      >
        <Wrapper>
          {isSingleFreteOpen ? (
            <SingleFrete />
          ) : (
            <>
              {firstRenderLoadin ? (
                <div className="set-body">
                  <div className="loader-before-scroll-setup"></div>
                </div>
              ) : (
                <AvailableList />
              )}
              <Filter />
            </>
          )}
          {page > 1 && (
            <div
              className="back-to-top-content"
              onClick={() => {
                document
                  .getElementById("0")
                  .scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <div className="backo-to-top"></div>
            </div>
          )}
        </Wrapper>
      </FretePageContext.Provider>
    </>
  );
};
export const useFretePageContext = () => useContext(FretePageContext);
export default FretPage;
