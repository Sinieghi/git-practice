import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import {
  closeClienteShowcase,
  getFreteClientShowCase,
} from "../feature/sigleFreteSlice/singleFreteSlice";
import FreteClientShowCaseComponent from "./FreteClientShowCaseComponent";
import { Link } from "react-router-dom";
import { ButtonFreight } from "../component/ButtonFreight";
import { setSingleFrete } from "../feature/allFreteSlice/allFreteSlice";
const FreteClienteShowCase = ({ createdBy }) => {
  let {
    freteClientShowCase,
    isLoading,
    page,
    numOfPage,
    totalFretes,
    clienteShowcaseEvent,
  } = useSelector((store) => store.singleFrete);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFreteClientShowCase({ createdBy }));
  }, [page]);
  return (
    <>
      {isLoading ? (
        <div
          className="loading-container"
          style={{ height: "50rem", display: "grid" }}
        >
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <Wrapper className="shocase__container">
            <h4 className="frete_cliente-showcase">Confira Também</h4>
            <h5 className="frete_cliente-showcase">Outros Fretes do Mesmo</h5>
            <button
              id="cl"
              onClick={() => dispatch(closeClienteShowcase())}
              className="close"
            >
              &times;
            </button>
            {freteClientShowCase?.map((frete, index) => {
              return (
                <Link
                  key={index}
                  className="client_showcase-link"
                  type="button"
                  onClick={() => {
                    dispatch(setSingleFrete(frete));
                    dispatch(closeClienteShowcase());
                  }}
                >
                  <FreteClientShowCaseComponent fretes={frete} />
                </Link>
              );
            })}
          </Wrapper>
          {numOfPage > 1 && (
            <ButtonFreight
              numOfPage={numOfPage}
              page={page}
              totalFretes={totalFretes}
              event={clienteShowcaseEvent}
              createdBy={createdBy}
            />
          )}
        </>
      )}
    </>
  );
};
const Wrapper = styled.div`
  h4,
  h5 {
    text-align: center;
  }
  .pagination {
    bottom: 2rem;
    right: 50%;
    transform: translate(-50%);
  }
`;
export default FreteClienteShowCase;

//setup de use eFfect q só roda com o objeto
// const isMounted = useRef(true)
// useEffect(()=>{
//   if(isMounted.current){
//     isMounted.current = false
//   }else{
//     setTimeout(()=>{
//       dispatch(getFreteClientShowCase({createdBy}))
//     },200)
//   }
// },[page])
