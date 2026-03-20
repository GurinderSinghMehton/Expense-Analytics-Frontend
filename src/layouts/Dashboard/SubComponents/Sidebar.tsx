import { Logo } from "../../../assets";
import styles from "../Styles/sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebarConatiner}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img
            src={Logo}
            draggable={false}
            alt="Expensa"
          />
        </div>
        <div className={styles.headerTextBox}>
          <h2 className="heading" style={{ fontWeight: "900" }}>
            Expensa
          </h2>
          <p className="paragraph">Executive suite</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
