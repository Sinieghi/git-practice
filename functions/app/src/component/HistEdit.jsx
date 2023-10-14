import { useState } from "react";
import { styled } from "styled-components";
import Forms from "./Forms";
import {
  historicCollector,
  showLoad,
  updateHistoric,
} from "../feature/historic/historicSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const HistEdit = ({ _id }) => {
  let { timeSpectative, description, stops, howMany, isLoading, msg } =
    useSelector((store) => store.historic);
  const [concluded, setConcluded] = useState(stops);
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(showLoad());
    dispatch(
      updateHistoric({
        timeSpectative,
        description,
        stops: concluded,
        howMany,
        histId: _id,
      })
    );
  };
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    dispatch(historicCollector({ name, value }));
  };
  if (msg === "success!") {
    toast.success("Notas editadas!");
  }
  return (
    <Wrapper className="popup">
      <form onSubmit={submitForm}>
        <div className="input-stops">
          <label htmlFor="stops">Paradas?</label>
          <input
            type="checkbox"
            name="stops"
            className="check"
            value={concluded}
            onChange={() => setConcluded(!concluded)}
          />
        </div>
        <Forms
          type="number"
          name="howMany"
          value={howMany}
          labelText="Quantas?"
          handleChange={handleChange}
          className={"many"}
        />
        <Forms
          type="text"
          name="timeSpectative"
          value={timeSpectative}
          labelText={"Tempo para completar"}
          handleChange={handleChange}
        />
        <div className="msg">
          <label htmlFor="text">
            {"Descreva sua experiencia com o caminhoneiro"}
          </label>
          <textarea
            name="description"
            id="text"
            onChange={handleChange}
            defaultValue={description}
          />
        </div>
        <div className="button">
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Enviando..." : "Envia"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default HistEdit;
