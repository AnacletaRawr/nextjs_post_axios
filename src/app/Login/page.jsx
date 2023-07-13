import { Loginform } from "../components/forms/Loginform";
import styles from "../page.module.css";

export default function Login() {
  return (
    <main className={styles.main}>
      <Loginform />
    </main>
  );
}
