import { useState } from "react";
import { Wrapper as FormWrapper } from "../assets/Wrappers/FormsWrapper";
import Forms from "./Forms";
import Btn from "../animatedContent/Btn";
import { useDispatch, useSelector } from "react-redux";
import {
  editSupportTicket,
  supportDataCollector as supportDataCollector,
} from "../feature/support/support";

const EditSupportTicket = () => {
  const dispatch = useDispatch();
  const query = new URLSearchParams(window.location.search);
  const { conclusion, status, btnLoading } = useSelector(
    (store) => store.support
  );
  const [isConcluded, setIsConcluded] = useState(
    query.get("isOpen") === "true"
  );
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(supportDataCollector({ name, value }));
  };
  const handleChangeCheckbox = (e) => {
    setIsConcluded(!isConcluded);
    let urlNavigate = new URL(window.location.href);
    urlNavigate.searchParams.set("isOpen", `${e.target.checked}`);
    window.history.pushState({ path: urlNavigate.href }, "", urlNavigate.href);
  };
  const handleSubumit = (e) => {
    e.preventDefault();
    dispatch(editSupportTicket({ conclusion, status }));
  };
  // if (!query.get('item')){
  //   <div className="empty-cont">
  //   </div>
  // }
  return (
    <div>
      <FormWrapper onSubmit={handleSubumit}>
        <input
          type="checkbox"
          name="isConcluded"
          id="isOpen"
          onChange={handleChangeCheckbox}
          checked={query.get("isOpen") === "true"}
        />
        <Forms
          type="text"
          name="status"
          labelText="Status"
          labelClass="animated-label"
          placeholder="Status"
          value={status}
          handleChange={handleChange}
        />
        <div className="form-box">
          <label htmlFor="text">conclusão</label>
          <textarea
            name="conclusion"
            value={conclusion}
            onChange={handleChange}
            id="text"
            cols="30"
            rows="10"
            className="input"
          />
        </div>
        <Btn
          type="submit"
          loadingText="Processando"
          text="Enviar"
          height="5rem"
          width="10rem"
          loading={btnLoading}
        />
      </FormWrapper>
    </div>
  );
};

export default EditSupportTicket;
