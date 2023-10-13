import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyToken } from "../feature/userSlice/userSlice";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { shwLoading } from "../feature/allFreteSlice/allFreteSlice";

const VerificationRouter = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.user);
  useEffect(() => {
    dispatch(shwLoading(isLoading));
    dispatch(verifyToken());
  }, []);
  if (isLoading) {
    return <div className="loader"></div>;
  }
  const query = new URLSearchParams(window.location.search);
  return (
    <Wrapper>
      <div className="welcome">
        <h1>
          Bem vindo! onFrete a disposição.{" "}
          <Link to={`/cadastro?sessão=${query?.get("sessão")?.toString()}`}>
            Entrar
          </Link>
        </h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  position: relative;
  .welcome {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  h1 {
    font-size: 3rem;
  }
  a {
    color: var(--red-org);
    font-size: 3rem;
  }
`;
export default VerificationRouter;
