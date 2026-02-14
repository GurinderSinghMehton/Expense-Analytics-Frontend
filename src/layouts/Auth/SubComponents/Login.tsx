import styles from "../Styles/auth.module.css";
import { Logo } from "../../../assets";
import Input from "../../../components/Input/Input";
import { useState } from "react";
import Button from "../../../components/Button/Button";

function Login() {
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const isDisabled =
    formData.email.length <= 0 || formData.password.length <= 0 ? true : false;

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
            placeholder="Email"
            type="text"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />

          <div>
            <Input
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <span className={styles.forgetPassword}>Forget password?</span>
          </div>
        </div>

        <div className={styles.btnContainer}>
          <Button children="Login" disabled={isDisabled} />
          <span className={styles.btnText}>
            <span>Don't have account?</span>
            <span className={styles.createAccount}>Create a Account</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
