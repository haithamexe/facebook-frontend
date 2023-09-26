const FormInput = (props) => {
  const {
    touched,
    handleFocus,
    error,
    register,
    confirmEmail,
    len,
    value,
    focused,
    ...rest
  } = props;

  let content = null;

  console.log(focused, "thisss", error, touched, register.name);

  let errorclassname =
    error && focused !== register.name
      ? `error_icon ${register.name}-error `
      : "";

  console.log(register.name, errorclassname);
  let inputclassname =
    len === "half" ? "register-input half " : "register-input ";

  inputclassname += errorclassname ? "redbar" : "";

  if (register.name === "emailConfirm" && !confirmEmail) {
    content = null;
  } else {
    content = (
      <>
        <input
          className={inputclassname}
          name={register.name}
          value={value}
          {...rest}
          {...register}
          onFocus={handleFocus}
        />
        {errorclassname && <i className={errorclassname}></i>}
      </>
    );
  }

  return content;
};

export default FormInput;
