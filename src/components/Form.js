import * as yup from "yup";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";
import Selections from "./Selections";
import GenderOptions from "./GenderOptions";
import RegisterInfo from "./RegisterInfo";
import { inputsForm } from "./FormArrays";
import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";

const Form = () => {
  const [submitTimes, setSubmitTimes] = useState(0);
  const [confirmEmail, setConfirmEmail] = useState(false);
  const [focused, setFocused] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    surName: "",
    email: "",
    emailConfirm: "",
    password: "",
    date: {
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      age: "",
    },
    gender: "",
    prefered: "",
    pronoun: "",
  });

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .matches(/^[A-Za-z]{2,20}$/, "First name is not valid")
      .required("First name is required"),
    surName: yup

      .string()
      .matches(/^[A-Za-z]{2,20}$/, "Surname is not valid")
      .required("Surname is required"),
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "Email is not valid"
      )
      .required("Email is required"),
    emailConfirm: yup
      .string()
      .oneOf([yup.ref("email")], "Email is not valid")
      .required("Email is required"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Password is not valid"
      )
      .required("Password is required"),
    year: yup
      .string()
      .matches(/^(190[5-9]|19[1-9][0-9]|200[0-5])$/, "Year is not valid")
      .required("Year is required"),

    age: yup
      .string()
      .matches(/^(1[8-9]|[2-9][0-9]|10[0-8])$/, "Age is not valid")
      .required("Email is required"),
    gender: yup.string().required(""),
    pronoun: yup.string().required("").oneOf(["he", "she", "they"]),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    // mode: "onChange",
    mode: "onBlur",
  });

  const formChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const formChangeExtended = (e) => {
    setFormData({
      ...formData,
      date: { ...formData.date, [e.target.name]: e.target.value },
    });
  };
  const formSubmit = () => {
    setSubmitTimes(submitTimes + 1);
    console.log(formData);
    console.log(submitTimes + 1);
  };
  const handleFocus = (e) => {
    if (e === "date") {
      setFocused("date");
    } else {
      setFocused(e.target.name);
    }
  };
  const handleBlur = () => {
    setFocused("");
  };

  console.log(formData);
  console.log(errors);

  return (
    <form
      className="register-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitTimes(submitTimes + 1);
        handleSubmit(formSubmit)(e);
      }}
      autoComplete="off"
    >
      <div className="form-inputs">
        {inputsForm.map((input, index) => (
          <FormInput
            key={index}
            confirmEmail={confirmEmail}
            value={formData[input.name]}
            error={errors[input.name]?.message}
            {...input}
            focused={focused}
            handleFocus={handleFocus}
            register={{
              ...register(input.name, {
                onChange: (e) => formChange(e),
                onBlur: () => handleBlur(),
              }),
            }}
          />
        ))}
      </div>
      <Selections
        formData={formData}
        submitTimes={submitTimes}
        setSubmitTimes={setSubmitTimes}
        focused={focused}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        registerYear={{
          ...register("year", {
            onChange: (e) => formChangeExtended(e),
            onBlur: () => handleBlur(),
          }),
        }}
        registerAge={{
          ...register("age", {
            onChange: (e) => formChangeExtended(e),
            onBlur: () => handleBlur(),
          }),
        }}
        errorYear={errors["year"]?.message}
        errorAge={errors["age"]?.message}
        handleChange={formChangeExtended}
      />
      <GenderOptions
        formData={formData}
        registerGender={{
          ...register("gender", {
            onChange: (e) => formChange(e),
            onBlur: () => handleBlur(),
          }),
        }}
        registerPronoun={{
          ...register("pronoun", {
            onChange: (e) => formChange(e),
            onBlur: () => handleBlur(),
          }),
        }}
        errorGender={errors["gender"]?.message}
        errorPronoun={errors["pronoun"]?.message}
        handleChange={formChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
      />
      <RegisterInfo />
      <div className="register-btn-container">
        <button className="btn register-btn" type="submit">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Form;
