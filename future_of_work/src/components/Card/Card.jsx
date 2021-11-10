import styles from "./Card.module.css";
import UpperNav from "../upper_nav/UpperNav";
import BottomNav from "../bottom-nav/BottomNav";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Workpass from "../workpass/Workpass";
import Data from "../../data.json";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <UpperNav />
      <BottomNav />
      <div className={styles.main}>
        <h1>Select Your Pass</h1>

        {Data.map((data) => (
          <Link to={`Card/${data.id}`}>
            <div className={styles.card}>
              <div className={styles.details}>
                <h1 className={styles.title}>{data.title}</h1>
                <ul>
                  {data.features.map((el) => (
                    <li> - {el}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.duration}>
                <p>{data.duration}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default Card;
