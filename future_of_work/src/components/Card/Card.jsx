import styles from "./Card.module.css";
import { useParams } from "react-router-dom";
import UpperNav from "../upper_nav/UpperNav";
import BottomNav from "../bottom-nav/BottomNav";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Card = ({ data }) => {
  const obj = useParams(); 

  return (
    <>
      {/* <map name=""></map> */}
      {/* <h4> {obj.id}</h4> */}

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
