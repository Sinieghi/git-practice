import { clearMsg } from "../feature/freteSlice/freteSlice";

export function inputsValidatorNotification(msg, status, dispatch, index) {
  if (status === 200) return;
  if (msg === "Informe o nome") index = 1;
  if (msg === "Informe o email") index = 2;
  if (msg === "Informe o telefone") index = 3;
  if (msg === "Informe o estado partida") index = 4;
  if (msg === "Informe a partida") index = 5;
  if (msg === "Informe o estado destino") index = 6;
  if (msg === "Informe o destino") index = 7;
  if (msg === "Informe o tipo de carga") index = 8;
  if (msg === "Informe a cobertura da carroceria") index = 9;
  if (msg === "Informe a data de coleta" || msg === "Verifique a data")
    index = 10;
  if (msg === "Informe o valor") index = 11;
  if (msg === "Informe a descrição") index = 12;
  if (msg.startsWith("Mínimo") || msg.startsWith("Máximo")) {
    index = logicHandlerLength(msg, index);
  }
  document.querySelector(`.inp${index}`)?.classList?.add(`target`);
  document.querySelector(`.inp${index}`)?.setAttribute("id", "validação");
  setTimeout(() => {
    document
      .getElementById("validação")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
    dispatch(clearMsg());
  }, 500);
  setTimeout(() => {
    document.querySelector(`.inp${index}`)?.classList?.remove(`target`);
    document.querySelector(`.inp${index}`)?.removeAttribute("id", "validação");
  }, 2500);
}

const logicHandlerLength = (msg, index) => {
  if (msg === "Mínimo 3 caracteres nome") index = 1;
  if (msg === "Mínimo 4 caracteres email") index = 2;
  if (msg === "Mínimo 6 caracteres telefone") index = 3;
  if (msg === "Mínimo 2 caracteres partida") index = 5;
  if (msg === "Mínimo 2 caracteres destino") index = 7;
  if (msg === "Mínimo 2 caracteres carga") index = 8;
  if (msg === "Máximo 20 caracteres cobertura") index = 9;
  if (msg === "Mínimo 10 e máximo 500 caracteres descrição") index = 12;

  return index;
};

export const checkBeforeUserSend = () => {
  const inputCharacterCheckPhon = document?.querySelector(".phone");
  const inputCharacterCheckName = document?.querySelector(".name");
  const inputCharacterCheckEmail = document?.querySelector(".email");
  const inputCharacterCheckCity = document?.querySelector(".city");
  const inputCharacterCheckToCity = document?.querySelector(".to-city");
  const inputCharacterCheckPrice = document?.querySelector(".price");
  const inputCharacterCheckDate = document?.querySelector(".date");
  const inputCharacterCheckLoad = document?.querySelector(".load");
  const inputCharacterCheckMessage = document?.querySelector(".message-text");
  window.addEventListener("click", function (e) {
    if (
      !inputCharacterCheckPhon?.contains(e.target) &&
      inputCharacterCheckPhon?.attributes.getNamedItem("value")?.nodeValue
        .length < 6
    ) {
      inputCharacterCheckPhon?.classList.add("length_lower");
    } else {
      this.setTimeout(() => {
        inputCharacterCheckPhon?.classList.remove("length_lower");
      }, 1000);
    }

    if (
      !inputCharacterCheckName?.contains(e.target) &&
      inputCharacterCheckName?.attributes.getNamedItem("value")?.nodeValue
        .length < 3
    ) {
      inputCharacterCheckName?.classList.add("length_lower");
    } else {
      this.setTimeout(() => {
        inputCharacterCheckName?.classList.remove("length_lower");
      }, 1000);
    }

    if (
      !inputCharacterCheckEmail?.contains(e.target) &&
      inputCharacterCheckEmail?.attributes.getNamedItem("value")?.nodeValue
        .length < 5
    ) {
      inputCharacterCheckEmail?.classList.add("length_lower");
    } else {
      this.setTimeout(() => {
        inputCharacterCheckEmail?.classList.remove("length_lower");
      }, 1000);
    }

    if (
      !inputCharacterCheckCity?.contains(e.target) &&
      inputCharacterCheckCity?.attributes.getNamedItem("value")?.nodeValue
        .length < 2
    ) {
      inputCharacterCheckCity?.classList.add("length_lower");
    } else {
      this.setTimeout(() => {
        inputCharacterCheckCity?.classList.remove("length_lower");
      }, 1000);
    }
    if (
      !inputCharacterCheckToCity?.contains(e.target) &&
      inputCharacterCheckToCity?.attributes.getNamedItem("value")?.nodeValue
        .length < 2
    ) {
      inputCharacterCheckToCity?.classList.add("length_lower");
    } else {
      this.setTimeout(() => {
        inputCharacterCheckToCity?.classList.remove("length_lower");
      }, 1000);
    }

    if (
      !inputCharacterCheckPrice?.contains(e.target) &&
      inputCharacterCheckPrice?.attributes?.getNamedItem("value")?.nodeValue
        ?.length < 1
    ) {
      inputCharacterCheckPrice?.classList.add("length_lower");
    } else {
      this.setTimeout(() => {
        inputCharacterCheckPrice?.classList.remove("length_lower");
      }, 1000);
    }

    //date
    if (
      !inputCharacterCheckDate?.contains(e.target) &&
      inputCharacterCheckDate?.attributes?.getNamedItem("value")?.nodeValue
        ?.length < 1
    ) {
      inputCharacterCheckDate?.classList.add("length_lower");
    } else {
      this.setTimeout(() => {
        inputCharacterCheckDate?.classList.remove("length_lower");
      }, 1000);
    }

    if (
      !inputCharacterCheckLoad?.contains(e.target) &&
      inputCharacterCheckLoad?.attributes.getNamedItem("value")?.nodeValue
        .length < 1
    ) {
      inputCharacterCheckLoad?.classList.add("length_lower");
    } else {
      this.setTimeout(() => {
        inputCharacterCheckLoad?.classList.remove("length_lower");
      }, 1000);
    }
    if (
      !inputCharacterCheckMessage?.contains(e.target) &&
      inputCharacterCheckMessage?.childNodes[0]?.nodeValue.length < 10
    ) {
      inputCharacterCheckMessage?.classList.add("length_lower");
    } else {
      this.setTimeout(() => {
        inputCharacterCheckMessage?.classList.remove("length_lower");
      }, 1000);
    }
  });
};

export function checkSelectInpBeforeSubmit() {
  const inputCharacterCheckPhon = document?.querySelector(".leave");
  const inputCharacterCheckName = document?.querySelector(".destiny");

  window.addEventListener("click", function (e) {
    if (
      !inputCharacterCheckName?.contains(e.target) &&
      inputCharacterCheckName?.value === ""
    ) {
      inputCharacterCheckName?.classList.add("unselected-inp");
    } else {
      inputCharacterCheckName?.classList.remove("unselected-inp");
    }
    if (
      !inputCharacterCheckPhon?.contains(e.target) &&
      inputCharacterCheckPhon?.value === ""
    ) {
      inputCharacterCheckPhon?.classList.add("unselected-inp");
    } else {
      inputCharacterCheckPhon?.classList.remove("unselected-inp");
    }
  });
}
