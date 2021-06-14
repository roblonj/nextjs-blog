import styles from "./navbar.module.scss";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

//this following is needed to load Fontawesome icons in proper size
import Head from "next/head";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const classList = isOpen ? styles.navListOpen : styles.navListClose;
  return (
    <nav className={styles.nav}>
      <Head>
        <style>{dom.css()}</style>
      </Head>
      <Link href="/">
        <a className={utilStyles.headingLg}>UPSC-Ed</a>
      </Link>

      <ul className={styles.navList + " " + classList}>
        <li>
          <Link href="#geo">Geography</Link>
        </li>
        <li>
          <Link href="#economy">Economics</Link>
        </li>
        <li>
          <Link href="#hist">History</Link>
        </li>
        <li>
          <Link href="#polity">Polity</Link>
        </li>
      </ul>

      <span className={styles.icon} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </span>
    </nav>
  );
};

export default NavBar;
