import styles from "./Card.module.css";
import UpperNav from "../upper_nav/UpperNav";
import BottomNav from "../bottom-nav/BottomNav";

const Card = ({ data }) => {
  return (
    <>
      {/* <h1>Select You Daily Pass</h1> */}
      <div className={styles.card_cont}>
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
      </div>
    </>
  );
};
export default Card;
