import { useEffect, useRef, useState } from "react";
import styles from "./input.module.css";

interface propType {
  placeholder: string;
  isDisabled?: boolean;
  type:
    | "text"
    | "numberWithDecimal"
    | "numberWithoutDecimal"
    | "positiveNumber"
    | "password";
  value: string;
  haveError?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  maxLength?: number;
  minLength?: number;
  iconText?: string;
  className?: string;
  containerClasses?: string;
  style?: any;
  varient?: "cardInput";
}

function Input({
  placeholder,
  isDisabled,
  onChange,
  haveError,
  type,
  iconText,
  containerClasses = "",
  varient,
  value,
  ...props
}: propType) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [hasValue, setHasValue] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    if (props.defaultValue && props.defaultValue.length > 0) {
      setHasValue(true);
    }
    if (value && value.length > 0) {
      setHasValue(true);
    }

    if (isDisabled) {
      if (value && value.length > 0) {
        setIsActive(true);
        setHasValue(true);
        return;
      }

      setIsActive(false);
      setHasValue(false);
    }
  }, [props?.defaultValue, value, isDisabled]);

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsActive(false);
    setHasValue(e.target.value.length > 0);
  };

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;

    if (type === "positiveNumber") {
      value = value.replace(/[^0-9]/g, ""); // Remove non-digits
      value = value.replace(/^0+/, ""); // Remove leading zeros
      e.target.value = value;
    }

    setHasValue(value.length > 0);
    onChange?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      type === "numberWithDecimal" ||
      type === "numberWithoutDecimal" ||
      type === "positiveNumber"
    ) {
      const allowedKeyCodes: { [key: number]: boolean } = {
        8: true, // Backspace
        9: true, // Tab
        13: false, // Enter
        37: true, // Left Arrow
        39: true, // Right Arrow
        46: true, // Delete
        190: type === "numberWithDecimal" ? true : false, // Period (.)
        110: type === "numberWithDecimal" ? true : false, // Numpad Period (.)
      };

      const keyCode = e.keyCode;

      if ((e.ctrlKey || e.metaKey) && keyCode === 86) {
        return true;
      }

      if (allowedKeyCodes[keyCode]) {
        return true;
      }

      const disallowedKeyCodes = [69, 187, 107, 189, 109]; // 48, 96 = '0' keys

      if (disallowedKeyCodes.includes(keyCode)) {
        e.preventDefault();
        return false;
      }

      const isNumberKey =
        (keyCode >= 48 && keyCode <= 57 && !e.shiftKey) ||
        (keyCode >= 96 && keyCode <= 105);

      if (!isNumberKey) {
        e.preventDefault();
        return false;
      }

      return true;
    }
  };

  const shouldShowLabel = isActive || hasValue || props.defaultValue;

  return (
    <>
      <div
        className={`${styles.inputWrapper} ${haveError ? styles.errorBorder : ""}`}
        onClick={() => inputRef.current?.focus()}
      >
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          ref={inputRef}
          readOnly={isDisabled}
          className={styles.input}
          value={value}
          type={type === "password" && !showPassword ? "password" : "text"}
          onKeyDown={
            type === "numberWithDecimal" ||
            type === "numberWithoutDecimal" ||
            type === "positiveNumber"
              ? handleKeyDown
              : (e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                  }
                }
          }
          {...props}
        />
        <label
          className={`${styles.label} ${shouldShowLabel ? styles.labelActive : ""} ${haveError ? styles.errorLabel : ""}`}
        >
          {placeholder}
        </label>
      </div>
      {type === "password" && (
        <div className={styles.pswBox}>
          <input
            type="checkbox"
            id="showPsd"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="showPsd">Show Password</label>
        </div>
      )}
    </>
  );
}

export default Input;
