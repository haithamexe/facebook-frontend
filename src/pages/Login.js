import Footer from "../components/Footer";

import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};
  return (
    <div className="login">
      <section className="login-container">
        <div className="login-header">
          <img src="../../icons/facebook.svg" alt="facebook-logo" />
          <h1>
            Facebook helps you connect and share with the people in your life.
          </h1>
        </div>
        <div className="login-box">
          <section className="login-box-form-box">
            <form
              className="login-box-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="login-box-form-input "
                type="text"
                placeholder="Email address or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="login-box-form-input "
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="btn login-btn"
                onClick={handleSubmit}
              >
                Log in
              </button>
              <Link to="forgot" className="forgot-password">
                Forgotten password?
              </Link>
            </form>
            <div className="login-box-divider" />
            <button className="btn create-account-btn">
              Create New Account
            </button>
          </section>
          <p className="create-a-page">
            <span>
              <Link className="create-a-page-link" to="create-page">
                Create a Page{" "}
              </Link>
            </span>
            for celebrity, brand or business.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
