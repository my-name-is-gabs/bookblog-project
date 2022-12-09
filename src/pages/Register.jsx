import { bookIcon } from "../assets";

const Register = () => {
  return (
    <>
      <div className="signup--container">
        <div className="signup--form">
          <div className="login--logo-head">
            <img src={bookIcon} alt="Icon" />
            <span className="font-bold text-[2.5rem] text-white">
              BlogBooks
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
