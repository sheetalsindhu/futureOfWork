import styles from "./BottomNav.module.css";

import { FiSearch, FiBriefcase, FiGlobe, FiBookOpen } from "react-icons/fi";
import { RiCouponLine } from "react-icons/ri";

function BottomNav() {
  return (
    <div className={styles.navbar}>
      <div className={styles.link}>
        <FiSearch className={styles.icon} />
        <p className={styles.link_text}>Explore</p>
      </div>
      <div className={styles.link}>
        <FiBriefcase className={styles.icon} />
        <p className={styles.link_text}>Jobs</p>
      </div>
      <div className={styles.link}>
        <RiCouponLine className={styles.icon} />
        <p className={styles.link_text}>Work Pass</p>
      </div>
      <div className={styles.link}>
        <FiBookOpen className={styles.icon} />
        <p className={styles.link_text}>Learn</p>
      </div>
      <div className={styles.link}>
        <FiGlobe className={styles.icon} />
        <p className={styles.link_text}>Connect</p>
      </div>
    </div>
  );
}

export default BottomNav;
