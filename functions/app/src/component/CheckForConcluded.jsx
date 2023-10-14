import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToConcluded } from "../feature/freteSlice/freteSlice";
import CheckBoxAnimation from "../animatedContent/CheckBoxAnimation";

const CheckForConcluded = ({ name, value, freteId, index }) => {
  const [isConcluded, setIsConcluded] = useState(value);
  const searchParamsFix = new URLSearchParams(window.location.pathname);
  let controlRequests = false;
  if (searchParamsFix?.toString()?.match("freight")) {
    controlRequests = true;
  }
  const dispatch = useDispatch();
  const handle = (e) => {
    setIsConcluded(!isConcluded);
    setTimeout(() => {
      dispatch(
        setToConcluded({
          isConcluded: e.target.checked,
          freteId: e.target.id,
          controlRequests,
        })
      );
    });
  };

  return (
    <CheckBoxAnimation
      isConcluded={isConcluded}
      handle={handle}
      freteId={freteId}
      name={name}
      index={index}
    />
  );
};

export default CheckForConcluded;
