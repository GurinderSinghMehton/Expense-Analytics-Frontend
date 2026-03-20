import React, { useState } from "react";
import Input from "../../../components/Input/Input";
import styles from "../Styles/auth.module.css";
import Button from "../../../components/Button/Button";
import { Logo } from "../../../assets";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState<{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  function handleNavigateToLogin() {
    navigate("/");
  }

  async function handelSignUp() {
    // temp: for now
    navigate("/dashboard");
  }

  const isDisabled =
    formData.email.length <= 0 ||
    formData.password.length <= 0 ||
    formData.username.length <= 0 ||
    formData.confirmPassword.length <= 0
      ? true
      : false;

  return (
    <div className={styles.dialogBox}>
      <div className={styles.header}>
        <img src={Logo} alt="Expensa" draggable={false} />
        <div className={styles.headertextBox}>
          <h3 className={styles.logoText}>Expensa</h3>
          <span className={styles.tagline}>Know where your money goes</span>
        </div>
      </div>

      <div className={styles.container}>
        <h4 className="heading">Welcome to Expensa.</h4>
        <div className={styles.inputBox}>
          <Input
            placeholder="Username"
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, username: e.target.value }))
            }
          />
          <Input
            placeholder="Email"
            type="text"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />

          <div className={styles.passwordBox}>
            <Input
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <Input
              placeholder="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
            />
          </div>
        </div>

        <div className={styles.btnContainer}>
          <Button
            children="Sign Up"
            disabled={isDisabled}
            onClick={handelSignUp}
          />
          <span className={styles.btnText}>
            <span>Already have account.</span>
            <span
              className={styles.createAccount}
              onClick={handleNavigateToLogin}
            >
              Login
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
