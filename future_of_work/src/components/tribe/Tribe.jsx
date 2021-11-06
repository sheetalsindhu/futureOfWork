import UpperNav from "../upper_nav/UpperNav";
import BottomNav from "../bottom-nav/BottomNav";
import styles from "./tribe.module.css";

function Tribe() {
  return (
    <>
      <UpperNav />
      <div className={styles.tribe_div}>
        <h4>New To Our Tribe?</h4>
        <div className={styles.team_div}>
          <div className={styles.tribe}>
            <img src="./solo.png" alt="solo" />
            <p> Joining solo</p>
          </div>

          <div className={styles.tribe}>
            <img src="./solo.png" alt="team" />
            <p>With a team</p>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
}

export default Tribe;
