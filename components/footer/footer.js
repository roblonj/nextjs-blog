import styles from "./footer.module.scss";
import utilStyles from "../../styles/utils.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footer__text}>Copyright &copy;2021</p>
    </div>
  );
};

export default Footer;
