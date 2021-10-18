import PropTypes from "prop-types";
import errorImage from "../../image/oops.jpg";
import styles from "./Error.module.css";

function ErrorComponent({ texterror }) {
  return (
    <div role="alert" className={styles.Wrapper}>
      <img src={errorImage} width="550" alt="no_res" />
      <p text={texterror} className={styles.Text}>
        {texterror}
      </p>
    </div>
  );
}

ErrorComponent.propTypes = {
  texterror: PropTypes.string.isRequired,
};

export default ErrorComponent;
