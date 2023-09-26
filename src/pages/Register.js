import "../styles/register.css";
import Form from "../components/Form";

const Register = () => {
  return (
    <div className="register">
      <section className="register-container">
        <section className="register-header">
          <img src="../../icons/facebook.svg" alt="facebook-logo" />
        </section>
        <section className="register-box-container">
          <div className="register-title">
            <h1>Sign Up</h1>
            <p>It's quick and easy.</p>
          </div>
          <div className="register-form-container">
            <Form />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Register;
