import type React from "react";
import styles from "./button.module.css";
import CircleLoader from "../CircleLoader/CircleLoader";

interface propType {
  disabled?: boolean;
  children: string | React.ReactNode;
  loading?: boolean;
  onClick: () => void;
}

function Button({ children, disabled, loading, onClick }: propType) {
  return (
    <button
      className={`${styles.customBtn} ${disabled ? styles.disabled : ""}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? <CircleLoader /> : children}
    </button>
  );
}

export default Button;
