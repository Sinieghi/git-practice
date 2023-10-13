import { useDispatch, useSelector } from "react-redux";
import {
  freteCollector,
  shwoLoading,
  updateFrete,
} from "../feature/freteSlice/freteSlice";
import FretePublishContainer from "./FretePublishContainer";
import { Wrapper } from "../assets/Wrappers/EditFreteWrapper";
import { Wrapper as FormsWrapper } from "../assets/Wrappers/FormsWrapper";

const EditFrete = () => {
  const {
    fretes,
    sortStatus,
    destiny,
    name,
    email,
    phone,
    price,
    text,
    city,
    toCity,
    bodyworkSpecial,
    bodyworkClosed,
    bodyworkOpen,
    light,
    medium,
    heavy,
    colectDate,
    loadType,
    canvas,
    isLoading,
    msg,
  } = useSelector((store) => store.frete);
  const {
    states,
    bodyworkSpecialOpt,
    bodyworkClosedOpt,
    bodyworkOpenOpt,
    lightOpt,
    mediumOpt,
    heavyOpt,
    destinyStates,
  } = useSelector((store) => store.allFretes);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    dispatch(freteCollector({ name, value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(shwoLoading());
    dispatch(
      updateFrete({
        ...fretes,
        name,
        price,
        email,
        sortStatus,
        text,
        city,
        phone,
        toCity,
        canvas,
        colectDate,
        loadType,
        bodyworkSpecial,
        bodyworkClosed,
        bodyworkOpen,
        light,
        medium,
        heavy,
        destiny,
      })
    );
  };

  return (
    <Wrapper>
      <FormsWrapper onSubmit={submitForm}>
        <FretePublishContainer
          name={name}
          email={email}
          city={city}
          toCity={toCity}
          phone={phone}
          price={price}
          colectDate={colectDate}
          loadType={loadType}
          canvas={canvas}
          states={states}
          handleChange={handleChange}
          bodyworkSpecialOpt={bodyworkSpecialOpt}
          bodyworkClosedOpt={bodyworkClosedOpt}
          bodyworkOpenOpt={bodyworkOpenOpt}
          lightOpt={lightOpt}
          mediumOpt={mediumOpt}
          destinyStates={destinyStates}
          heavyOpt={heavyOpt}
          heavy={heavy}
          sortStatus={sortStatus}
          destiny={destiny}
          bodyworkSpecial={bodyworkSpecial}
          bodyworkClosed={bodyworkClosed}
          bodyworkOpen={bodyworkOpen}
          light={light}
          medium={medium}
          msg={msg}
        />
        <div className="btn-container">
          <button type="submit" id="submit-btn" disabled={isLoading}>
            {isLoading ? "Editando..." : "Editar"}
          </button>
        </div>
      </FormsWrapper>
    </Wrapper>
  );
};

export default EditFrete;
