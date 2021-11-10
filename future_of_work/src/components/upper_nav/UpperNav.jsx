import styles from "./upperNav.module.css";
// import { link } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

function UpperNav() {
  return (
    <div className={styles.navbar}>
      <div className={styles.first}>
        <a className={styles.link}>
          <RiArrowLeftSLine className={styles.icon} />
        </a>
        <p className={styles.heading}>Worklyf</p>
      </div>
      <div>
        <a className={styles.humburger}>
          <GiHamburgerMenu className={styles.icon} />
        </a>
      </div>
    </div>
  );
}

export default UpperNav;
