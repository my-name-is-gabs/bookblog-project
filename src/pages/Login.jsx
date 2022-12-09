import { bookIcon } from "../assets";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login--container">
        <div className="login--form">
          <div className="login--logo-head">
            <img src={bookIcon} alt="Icon" />
            <span className="font-bold text-[2.5rem] text-white">
              BlogBooks
            </span>
          </div>

          <div className="form-controller">
            <div className="form-control">
              <input
                className="form_input"
                type="email"
                id="email"
                name="email"
                placeholder=""
              />
              <label className="form_label" htmlFor="email">
                Email
              </label>
            </div>

            <div className="form-control">
              <input
                className="form_input"
                type="password"
                name="password"
                id="password"
                placeholder=""
              />
              <label className="form_label" htmlFor="password">
                Password
              </label>
            </div>

            <button className="login--btn">Login</button>
          </div>

          <p className="my-4 text-white">
            Don't have an account?{" "}
            <Link to="/register" className="ml-1 text-blue-500 underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
