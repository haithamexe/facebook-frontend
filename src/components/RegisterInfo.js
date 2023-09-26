import { Link } from "react-router-dom";

const RegisterInfo = () => {
  return (
    <div className="register-info-container">
      <p className="register-info">
        People who use our service may have uploaded your contact information to
        Facebook.{" "}
        <Link
          to="/https://www.facebook.com/help/637205020878504"
          className="click"
        >
          Learn more.
        </Link>
      </p>
      <p className="register-info">
        By clicking Sign Up, you agree to our{" "}
        <Link
          className="click"
          to="https://www.facebook.com/legal/terms/update"
        >
          Terms
        </Link>
        ,{" "}
        <Link
          className="click"
          to="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
        >
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link
          className="click"
          to="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0"
        >
          Cookies Policy
        </Link>
        . You may receive SMS notifications from us and can opt out at any time.
      </p>
    </div>
  );
};

export default RegisterInfo;
