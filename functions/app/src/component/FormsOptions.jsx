import WarningBallonsInpts from "../popups/popup-component/warningBallonInpts";

const FormsOptions = ({
  name,
  value,
  handleChange,
  labelText,
  sorts,
  className,
  holders,
  labelClass,
  id,
  ballon,
  msg,
  index,
  seleClass,
  queryClass,
}) => {
  return (
    <div className={className || "form-opt"} id={id || "form-opt"}>
      {ballon && <WarningBallonsInpts msg={msg} index={index} />}
      <label
        htmlFor={name}
        id="label__from-opt"
        className={labelClass || "form-label"}
      >
        {labelText || name}:{" "}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className={`selection inp${
          index || "-none"
        } ${seleClass} ${queryClass}`}
      >
        {sorts.map((state, index) => {
          return (
            <option value={state} className="options" key={index}>
              {state || holders}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormsOptions;
