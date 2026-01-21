import styles from "./background.module.css";

function Background() {
  return (
    <div className={styles.background}>
      <div className={styles.ellipse_1} />
      <div className={styles.ellipse_2} />
      <div className={styles.ellipse_3} />

      <div className={styles.blurOverlay} />
    </div>
  );
}

export default Background;
