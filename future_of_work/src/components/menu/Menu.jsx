import { FiArrowLeft } from "react-icons/fi";
import { FaBookmark, FaBell, FaCalendarAlt } from "react-icons/fa";
import styles from "./menu.module.css";

function Menu() {
  return (
    <>
      <div classname={styles.menu_cont}>
        <div classname={styles.upper_div}>
          <FiArrowLeft />
          <div>
            <h1>Sheetal Sindhu</h1>
            <p>sheetalsindhu@gmail.com</p>
          </div>
        </div>

        <div classname={styles.lower_div}>
          <div classname={styles.worklyf_div}>
            <h1>My Worklyf</h1>
            <div classname={styles.links}>
              <FaBookmark />
              <div>
                <p>Bookmarks</p>
              </div>
            </div>

            <div classname={styles.links}>
              <FaCalendarAlt />
              <div>
                <p>Calender</p>
              </div>
            </div>

            <div classname={styles.links}>
              <FaBookmark />
              <div>
                <p>Notes</p>
              </div>
            </div>
          </div>

          <div classname={styles.account_div}>
            <h1>My Account</h1>
            <div classname={styles.links}>
              <FaBookmark />
              <div>
                <p>Account Details</p>
              </div>
            </div>

            <div classname={styles.links}>
              <FaBookmark />
              <div>
                <p>Bank and Autopay</p>
              </div>
            </div>

            <div classname={styles.links}>
              <FaBell />
              <div>
                <p>Notifications</p>
              </div>
            </div>
          </div>

          <div classname={styles.aboutUs_div}>
            <h1>About Us</h1>
            <div classname={styles.links}>
              <FaBookmark />
              <div>
                <p>Beta Version</p>
              </div>
            </div>

            <div classname={styles.links}>
              <FaBookmark />
              <div>
                <p>Our Story</p>
              </div>
            </div>

            <div classname={styles.links}>
              <FaBookmark />
              <div>
                <p>Help & Support</p>
              </div>
            </div>

            <div classname={styles.links}>
              <FaBookmark />
              <div>
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
