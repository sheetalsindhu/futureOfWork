import styles from "./workpass.module.css";
import UpperNav from "../upper_nav/UpperNav";
import BottomNav from "../bottom-nav/BottomNav";
import { BsFillLightningChargeFill } from "react-icons/bs";

const Workpass = ({ data }) => {
  // useeffect params fetch =1,
  return (
    <>
      {/* <h1>Select You Daily Pass</h1> */}
      <div className={styles.card_cont}>
        <div className={styles.card}>
          <div className={styles.title}>
            <div className={styles.icon}>
              <BsFillLightningChargeFill />
            </div>
            <div>
              <h1 className={styles.title}>{data.title}</h1>
              <h5>₹ {data.price}</h5>
            </div>
          </div>
          <div className={styles.about}>
            <h4>About</h4>
            <p>{data.about}</p>
          </div>

          <div className={styles.facilities}>
            <h4>Facilities</h4>
            <div className={styles.faci}>
              {data.facilities.map((el) => (
                <p> {el}</p>
              ))}
            </div>
          </div>

          <div className={styles.events}>
            <h4>Upcoming Events</h4>
            <div>
              <ul>
                {data.events.map((el) => (
                  <li> {el}</li>
                ))}
              </ul>
            </div>
          </div>

          <button className={styles.getbtn}>Get your work pass</button>

          <div className={styles.reviews}>
            <h4>Reviews</h4>
            <div>
              <ul>
                {data.reviews.map((el) => (
                  <li> {el}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workpass;