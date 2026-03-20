import styles from "./Styles/dashboard.module.css";
import Background from "../../components/Background";
import Sidebar from "./SubComponents/Sidebar";

function Dashboard() {
  return (
    <>
      <Background />
      <div className={styles.mainContainer}>
        <Sidebar />
      </div>
    </>
  );
}

export default Dashboard;
