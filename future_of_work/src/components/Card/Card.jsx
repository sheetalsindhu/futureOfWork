import styles from "./Card.module.css";
import { BsArrowRightCircle } from "react-icons/bs";

function Card({ data }) {
  console.log(data);
  return (
    <div className={styles.card}>
      <div className={styles.upper_div}>
        <div>
          <h1 style={{ color: data.color }}>{data.title}</h1>
          <p>{data.subtitle}</p>
        </div>
        <div className={styles.icon}>
          <BsArrowRightCircle />
        </div>
      </div>

      <div className={styles.image_div}>
        <img src={data.image} alt="" />
      </div>
    </div>
  );
}

export default Card;
