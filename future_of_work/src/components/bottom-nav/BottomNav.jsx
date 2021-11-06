import styles from "./BottomNav.module.css";

import { FiSearch, FiBriefcase, FiGlobe, FiBookOpen } from "react-icons/fi";
import { MdOutlineReviews } from "react-icons/md";

function BottomNav() {
  return (
    <>
      <div className={styles.bottom_nav}>
        <div className={styles.tab}>
          <div>
            <FiSearch />
          </div>
          <div>
            <p>Explore</p>
          </div>
        </div>

        <div className={styles.tab}>
          <div>
            <FiBriefcase />
          </div>
          <div>
            <p>Jobs</p>
          </div>
        </div>

        <div className={styles.tab}>
          <div>
            <MdOutlineReviews />
          </div>
          <div>
            <p>Work Pass</p>
          </div>
        </div>

        <div className={styles.tab}>
          <div>
            <FiBookOpen />
          </div>
          <div>
            <p>Learn</p>
          </div>
        </div>

        <div className={styles.tab}>
          <div>
            <FiGlobe />
          </div>
          <div>
            <p>Connect</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomNav;
