import PropTypes from "prop-types";
import errorImage from "../../image/oops.jpg";
import s from "./Error.module.css";

function ErrorComponent({ texterror }) {
  return (
    <div role="alert" className={s.Wrapper}>
      <img src={errorImage} width="500" alt="no_result" />
      <p text={texterror} className={s.Text}>
        {texterror}
      </p>
    </div>
  );
}

ErrorComponent.propTypes = {
  texterror: PropTypes.string.isRequired,
};

export default ErrorComponent;
