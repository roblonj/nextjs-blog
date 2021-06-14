import Link from "next/link";
import styles from "./button.module.css";

const Button = ({ name }) => {
  return (
    <div className={styles.btn}>
      <Link href="http://www.google.com" classname="link">
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default Button;
