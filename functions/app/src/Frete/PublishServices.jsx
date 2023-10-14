import { useDispatch, useSelector } from "react-redux";
import { collectData, freteCollector } from "../feature/freteSlice/freteSlice";
import { FretePublishContainer } from ".";
import { Wrapper } from "../assets/Wrappers/PublishServiceWrapper";
import { Wrapper as FormsWrapper } from "../assets/Wrappers/FormsWrapper";
import Btn from "../animatedContent/Btn";

// let currentDate =  Date.now();

const PublishServices = () => {
  const {
    states,
    sortStatus,
    destiny,
    name,
    email,
    phone,
    price,
    text,
    city,
    toCity,
    bodyworkSpecialOpt,
    bodyworkSpecial,
    bodyworkClosedOpt,
    bodyworkClosed,
    bodyworkOpenOpt,
    bodyworkOpen,
    lightOpt,
    light,
    mediumOpt,
    medium,
    heavy,
    heavyOpt,
    colectDate,
    loadType,
    canvas,
    destinyStates,
    isLoading,
    msg,
    status,
  } = useSelector((store) => store.frete);
  // let lookinForDateTyped = Date.now(colectDate)
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    // console.log(lookinForDateTyped, currentDate);
    // if(lookinForDateTyped < currentDate){
    //  toast.error('Verifique a data, parece que o senhor(a) esta criando o frete no passado')
    //  return
    // }
    dispatch(
      collectData({
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
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(freteCollector({ name, value }));
  };
  return (
    <Wrapper>
      <div className="title">
        <h3>Publique seu frete</h3>
      </div>
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
          text={text}
          msg={msg}
          status={status}
        />
        <div className="btn-container">
          <Btn
            handleClick="submitType"
            loading={isLoading}
            loadingText="Processando"
            text="Publicar"
            type="submit"
            width="18rem"
            height="5rem"
            margin="0 0 3rem 0"
            msg={msg}
            givemeCheckMark="yes"
          />
          {/* <span>Checar informações <Link to='client_page/freight'>Enviadas</Link></span>  */}
        </div>
      </FormsWrapper>
    </Wrapper>
  );
};

export default PublishServices;
