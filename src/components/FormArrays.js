const nameRegex = /^[A-Za-z]{2,20}$/;
const phoneRegex = /^(\+2)?01[0125][0-9]{8}$/;
const emailRegex =
  /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?(\.[a-z]{2,8})?$/;
const combinedRegex = new RegExp(`${phoneRegex}|${emailRegex}`);
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

export const inputsForm = [
  {
    name: "firstName",
    type: "text",
    placeholder: "First name",
    len: "half",
    pattern: nameRegex,
  },

  {
    name: "surName",
    type: "text",
    placeholder: "Surname",
    len: "half",
    pattern: "[A-Za-z]{2,20}",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Mobile number or email address",
    pattern: combinedRegex,
  },
  {
    name: "emailConfirm",
    type: "email",
    placeholder: "Mobile number or email address",
    pattern: combinedRegex,
  },
  {
    name: "password",
    type: "password",
    placeholder: "New password",
    autoComplete: "true",
    pattern: passwordRegex,
  },
];

export const SelectDates = [
  {
    name: "day",
    type: "number",
    placeholder: "Day",
  },
  {
    name: "month",
    type: "number",
    placeholder: "Month",
  },
  {
    name: "year",
    type: "number",
    placeholder: "Year",
  },
];

export const inputsGender = [
  {
    name: "gender",
    type: "radio",
    value: "Male",
  },
  {
    name: "gender",
    type: "radio",
    value: "Female",
  },
  {
    name: "gender",
    type: "radio",
    value: "Custom",
  },
];
