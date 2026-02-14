import styles from "./circleloader.module.css";

const CircleLoader = ({
  height,
  width,
}: {
  height?: string;
  width?: string;
}) => {
  return (
    <div
      className={styles.loader}
      style={{
        height: `${height}px`,
        width: `${width}px`,
        border: "4px solid #cccccc",
        borderTop: "4px solid grey",
      }}
    ></div>
  );
};

export default CircleLoader;
