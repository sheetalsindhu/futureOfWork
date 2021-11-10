import styles from "./Card.module.css";
import UpperNav from "../upper_nav/UpperNav";
import BottomNav from "../bottom-nav/BottomNav";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import Workpass from "../workpass/Workpass";

const Card = ({ data }) => {
  const [cardData, setCardData] = useState({});

  const handleClick = (e) => {
    setCardData(e);
  };

  

  return (
    <>
      <UpperNav />
      <BottomNav />
      <div className={styles.main}>
        <h1>Select Your Pass</h1>

        {data.map((data) => (
          <div
            onClick={() => {
              handleClick(data);
            }}
            className={styles.card}
          >
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
        ))}

        <Workpass data={cardData} />
      </div>
    </>
  );
};
export default Card;
