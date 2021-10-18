import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Loader.module.css";

function LoaderComponent() {
  return (
    <div className={styles.Overlay}>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={0}
      />
    </div>
  );
}

export default LoaderComponent;
