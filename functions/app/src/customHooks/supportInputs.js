export function targetTheInput(msg) {
  const queryInputNode = document.querySelectorAll(".support-forms");
  let msgLength = msg.split(",");
  msgLength.map((msg, index) => {
    if (msg === "Informe o email") {
      index = 1;
    }
    if (msg === "Mínimo 6 caracteres") {
      index = 2;
    }
    if (msg === "Coloque uma mensagem") {
      index = 3;
    }
    if (
      msg === "Tickets só pode ser enviados duas horas depois do envio anterior"
    ) {
      return;
    }
    queryInputNode[0][index].classList.add("target");
    setTimeout(() => {
      queryInputNode[0][index].classList.remove("target");
    }, 2000);
    return msg;
  });
  let msgFormat = "";
  if (!msg?.match(",")) {
    return (msgFormat = msg);
  }
  let val = msg?.match(",").index;
  msgFormat = msg?.slice(0, val);
  return msgFormat;
}

export function targetTheInputMessages(msg) {
  const queryInputNode = document.querySelectorAll(".forms__popup-message");

  let msgLength = msg.split(",");

  msgLength.map((msg, index) => {
    if (msg === "Informe o nome") {
      index = 0;
    }
    if (msg === "Informe o email") {
      index = 1;
    }
    if (msg === "Mínimo 6 caracteres") {
      index = 2;
    }
    if (msg === "Envie-nos uma mensagem") {
      index = 3;
    }

    queryInputNode[0][index].classList.add("target");
    setTimeout(() => {
      queryInputNode[0][index].classList.remove("target");
    }, 2000);
    return msg;
  });
  let msgFormat = "";
  if (!msg?.match(",")) {
    return (msgFormat = msg);
  }
  let val = msg?.match(",").index;
  msgFormat = msg?.slice(0, val);
  return msgFormat;
}
