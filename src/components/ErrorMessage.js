import errorIcon from "../assets/contact/desktop/icon-error.svg";
import "./ErrorMessage.css";

const ErrorMessage = ({ errorMsg }) => {
  return (
    <div className="error-message">
      <span>{errorMsg}</span>
      <img src={errorIcon} alt="" className="error-icon" />
    </div>
  );
};

export default ErrorMessage;
