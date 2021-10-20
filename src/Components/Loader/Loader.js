import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Loader.module.css";

function LoaderComponent() {
  return (
    <div className={styles.Overlay}>
      <Loader
        type="ThreeDots"
        color="#3f51b5"
        height={80}
        width={100}
        timeout={1000}
      />
    </div>
  );
}

export default LoaderComponent;
