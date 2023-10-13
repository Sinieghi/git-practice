function Forms({
  type,
  value,
  name,
  labelText,
  handleChange,
  placeholder,
  className,
  required,
  min,
  max,
  autoComplete,
  labelClass,
  id,
  index,
  inputId,
  spellcheck,
  autocorrect,
  ariaInvalid,
  inputmode,
  inpClass,
}) {
  return (
    <div className={className || "form-box"} id={id || "form-box"}>
      <input
        type={type}
        className={`input inp${index || "-none"} ${inpClass}`}
        autoComplete={autoComplete || "off"}
        minLength={min}
        maxLength={max}
        value={value || ""}
        inputMode={inputmode}
        required={required}
        onChange={handleChange}
        spellCheck={spellcheck}
        autoCorrect={autocorrect}
        aria-invalid={ariaInvalid}
        // id={inputId || name}
        name={name}
        placeholder={placeholder}
      />
      <label htmlFor={name} id="label" className={labelClass || "label"}>
        {labelText || name}
      </label>
    </div>
  );
}

export default Forms;
