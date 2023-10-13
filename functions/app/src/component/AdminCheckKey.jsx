import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../feature/userFromDataSlice/userDataSlice";
import { Wrapper } from "./AdminPrivate";
import { Wrapper as FormWrapper } from "../assets/Wrappers/FormsWrapper";
import Btn from "../animatedContent/Btn";
import Forms from "./Forms";
import { toast } from "react-toastify";
import customFetch from "../utils/axios";
const initialState = {
  userKey: "",
};
const AdminCheckKey = ({ children }) => {
  const { userData } = useSelector((store) => store.userData);
  const [userKey, setUserKey] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await customFetch.post(
        `/api/v1/admin/admin-user/${userData._id}/login`,
        userKey
      );
      if (response.status === 201 && response.data.msg === "ok!") {
        // let url = response.data.url;
        // navigator(null, null, url);
      }
      if (response.status === 200) {
        setIsLoading(false);

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
    setUserKey({ ...userKey, [name]: value });
  };
  if (userData?.adminCredentials[0]?.isValidSsesion) {
    return children;
  }
  return (
    <Wrapper>
      {error ? (
        <h1 className="srcreen-size">Something went wrong</h1>
      ) : (
        <>
          <FormWrapper onSubmit={handleSubmit}>
            <Forms
              type="password"
              name="userKey"
              labelText="Key"
              labelClass="animated-label"
              placeholder="Key"
              value={userKey.userKey}
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
  );
};

export default AdminCheckKey;
