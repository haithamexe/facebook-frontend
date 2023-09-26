import React, { useEffect } from "react";
import { getMonthName } from "./getMonth";

const Selections = (props) => {
  const {
    formData: {
      date: { day, month, year, age },
    },
    submitTimes,
    setSubmitTimes,
    focused,
    errorYear,
    errorAge,
    handleFocus,
    registerYear,
    registerAge,
    handleChange,
    handleBlur,
  } = props;

  console.log(errorYear, errorAge, "error ceack");

  console.log(day, month, year, age);
  let selectClassName = focused !== "date" && errorYear ? "redbar " : " ";
  let selectClassNameAge = focused !== "age" && errorAge ? "redbar " : " ";
  const getdays = () => {
    return new Date(year, month, 0).getDate();
  };

  const years = new Array(108)
    .fill(0)
    .map((_, i) => new Date().getFullYear() - i);
  const months = new Array(12).fill(0).map((_, i) => i + 1);
  const days = new Array(getdays()).fill(0).map((_, i) => i + 1);

  let content = null;

  if (submitTimes >= 2 && errorYear) {
    content = (
      <div className="register-date-age">
        <p className="doa">Age</p>
        <i
          className={
            focused !== "age" && errorAge ? "error_icon date-error" : ""
          }
        ></i>
        <div className="register-date-form-age">
          <input
            name="age"
            className={"age-input " + selectClassNameAge}
            type="number"
            value={age}
            placeholder="Your age"
            onFocus={handleFocus}
            {...registerAge}
          ></input>
          <p className="click" onClick={() => setSubmitTimes(0)}>
            Use date of birth
          </p>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="register-date-container">
        <label className="doa">
          <p>Date of birth</p>
          <button type="button" className="info-button">
            <i className="question_icon"></i>
          </button>
        </label>
        <i
          className={
            focused !== "date" && errorYear ? "error_icon date-error" : ""
          }
        ></i>
        <div className="register-date">
          <select
            className={selectClassName}
            name="day"
            value={day}
            onFocus={() => handleFocus("date")}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            {days.map((day, index) => (
              <option key={index} value={day}>
                {day}
              </option>
            ))}
          </select>
          <select
            className={selectClassName}
            name="month"
            value={month}
            onFocus={() => handleFocus("date")}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            {months.map((month, index) => (
              <option key={index} value={month}>
                {getMonthName(month)}
              </option>
            ))}
          </select>

          <select
            className={selectClassName}
            name="year"
            value={year}
            onFocus={() => handleFocus("date")}
            {...registerYear}
          >
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  return content;
};

export default Selections;
