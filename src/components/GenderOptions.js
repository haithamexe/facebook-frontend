import React from "react";

const GenderOptions = (props) => {
  const {
    formData: { pronoun, gender, prefered },
    handleChange,
    handleFocus,
    handleBlur,
    registerGender,
    registerPronoun,
    errorGender,
    errorPronoun,
    focused,
  } = props;

  let genderror = focused !== "gender" && errorGender ? "redbar " : "";

  return (
    <div className="register-gender-box">
      <label className="doa">
        <p>Gender</p>
        <button type="button" className="info-button">
          <i className="question_icon"></i>
        </button>
        {/* <i className={"error_icon gender-error"}></i> */}
      </label>
      <div className="register-gender">
        <div className="gender-box">
          <label>Female</label>
          <input
            name="gender"
            className="gender-input"
            type="radio"
            value="female"
            onChange={handleChange}
          />
        </div>
        <div className="gender-box">
          <label>Male</label>
          <input
            name="gender"
            className="gender-input"
            type="radio"
            value="male"
            onChange={handleChange}
          />
        </div>
        <div className="gender-box">
          <label>Custom</label>
          <input
            name="gender"
            className="gender-input"
            type="radio"
            value="custom"
            onChange={handleChange}
          />
        </div>
      </div>
      {gender === "custom" && (
        <>
          <div className="pronoun">
            <div className="pronoun-select">
              <select
                name="pronoun"
                // className={selectClassName}
                onChange={handleChange}
              >
                {!pronoun && (
                  <option defaultValue="">Select your pronoun</option>
                )}
                <option value="they">
                  They: "Wish them a happy birthday!"
                </option>
                <option value="she">She: "Wish her a happy birthday!"</option>
                <option value="he">He: "Wish him a happy birthday!"</option>
              </select>
              {/* <i
                className={
                  pronoun.isFocused || !pronoun.touched
                    ? ""
                    : "error_icon pronoun-error"
                }
              ></i> */}

              <p>Your pronoun is visible to everyone.</p>
            </div>
            <input
              name="prefered"
              type="text"
              placeholder="Gender (optional)"
              // value={prefered}
              onChange={handleChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default GenderOptions;
