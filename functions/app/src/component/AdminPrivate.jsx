import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../feature/userFromDataSlice/userDataSlice";
import { Wrapper as FormWrapper } from "../assets/Wrappers/FormsWrapper";
import { Outlet } from "react-router-dom";
import Forms from "./Forms";
import Btn from "../animatedContent/Btn";
import styled from "styled-components";
import { toast } from "react-toastify";
import AdminPrivateLinks from "../popups/popup-component/AdminPrivateLinks";
import { setUrlOnClickHandler } from "../utils/beforeActionHandler";
import customFetch from "../utils/axios";

const initialState = {
  password: "",
};
const AdminPrivate = () => {
  let urlNavigate = new URL(window.location.href);
  const { userData } = useSelector((store) => store.userData);
  const [userPassword, setUserPassword] = useState(initialState);
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  if (userData?.role !== "admin") {
    return (
      <Wrapper>
        <h1 style={{ textAlign: "center", margin: "15rem " }}>
          You are not allowed
        </h1>
      </Wrapper>
    );
  }
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await customFetch.post(
        `/api/v1/admin/admin-user/${userData._id}`,
        userPassword
      );
      if (response.status === 201 && response.data.msg === "ok!") {
        setUrl({
          url: response.data.url,
          urlMessage: response.data.urlMessage,
        });
        dispatch(getUser());
        setTimeout(() => {
          setUrlOnClickHandler({
            eventType: "set",
          });
        });
      }
      if (response.status === 200) {
        setIsLoading(false);
        setTimeout(() => {
          window.history.go(-1);
        }, 5000);
        toast.success("Pronto!");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(true);
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserPassword({ ...userPassword, [name]: value });
  };
  if (error) return <h1>Something went wrong</h1>;
  return (
    <>
      <Wrapper>
        {userData?.adminCredentials[0]?.isValidSsesion && <Outlet />}
        <AdminPrivateLinks {...url} />
        {urlNavigate.pathname === "/admin-checkout" && (
          <>
            <FormWrapper className="pass-check" onSubmit={handleSubmit}>
              <Forms
                type="password"
                name="password"
                labelText="Senha"
                labelClass="animated-label"
                placeholder="Senha"
                autoComplete="new-password"
                value={userPassword.password}
                handleChange={handleChange}
              />
              <div className="inline-content">
                <Btn
                  type="submit"
                  loadingText="Processando"
                  text="Enviar"
                  height="5rem"
                  width="10rem"
                  loading={isLoading}
                />
              </div>
            </FormWrapper>
          </>
        )}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  min-height: calc(100vh - 75px);
  position: relative;
  .pass-check {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    width: 50%;
    input {
      height: 5rem;
      width: 100%;
    }
    .inline-content {
      place-content: center;
      display: grid;
    }
    button {
      margin-top: 5rem;
    }
  }
  a {
    color: var(--red-org);
    height: 1.5rem;
    bottom: 5rem;
    right: 5rem;
    margin-right: 10rem;
  }
`;
export default AdminPrivate;
