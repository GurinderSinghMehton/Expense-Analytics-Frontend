import { Outlet } from "react-router-dom";
import Background from "../../components/Background";
import styles from "./Styles/auth.module.css";

function Auth() {
  return (
    <>
      <Background />
      <div className={styles.mainContainer}>
        <Outlet />
      </div>
    </>
  );
}

export default Auth;
