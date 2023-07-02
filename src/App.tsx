import "./App.scss";
import img from "./assets/images/illustration-sign-up-desktop.svg";
import imgResponsive from "./assets/images/illustration-sign-up-desktop.svg";
import features from "./assets/images/icon-list.svg";
import { useState } from "react";

function App() {
  const [verify, setVerify] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const verifyEmail = (email: string): void => {
    // Realizar la validación del correo aquí
    const isValidEmail: boolean = validateEmail(email);

    if (isValidEmail) {
      setVerify(!verify);
      setError(!error);
      // Realizar otras acciones si el correo es válido
    } else {
      setError(true);
    }
  };

  const handleVerify = () => {
    setEmail("");
    setVerify(!verify);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="form_container">
      <div className={!verify ? "form_box " : "dn"}>
        <div className="form_left">
          <h1 className="title">Stay updated!</h1>
          <p className="subtitle">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <p className="features">
            <img src={features} alt="" />
            Product discovery and building what matters
          </p>
          <p className="features">
            <img src={features} alt="" />
            Measuring to ensure updates are a success
          </p>
          <p className="features">
            <img src={features} alt="" />
            And much more
          </p>
          <div className={error ? "submit active" : "submit"}>
            <p className="email">
              Email address{" "}
              <span className={error ? "activeValidate" : "dn"}>
                Valid email required
              </span>
            </p>
            <input
              className="input"
              type="text"
              placeholder="email@company.com"
              value={email}
              onChange={handleInputChange}
            />
            <button onClick={() => verifyEmail(email)} className="button">
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
        <div className="form_right">
          <img src={img} alt="" />
        </div>
        <div className="form_right-mobile">
          <img src={imgResponsive} alt="" />
        </div>
      </div>

      <div className={verify ? "success-card" : "dn"}>
        <img className="sucess_img" src={features} alt="" />
        <h1 className="success_title">Thanks for subscribing!</h1>
        <p className="success_text">
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription
        </p>
        <button className="success_dismiss" onClick={handleVerify}>
          Dismiss message
        </button>
      </div>
    </div>
  );
}

export default App;
