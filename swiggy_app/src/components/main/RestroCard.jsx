import styles from "./RestroCard.module.css";

const RestroCard = (props) => {
  return (
    <>
      <div className={styles.restro_card}>
        <div className={styles.restro_card__images}>

          <img src="../../../public/pexels-ash-122861-376464.jpg" alt="image not found" />

        </div>

        <div className={styles.restro_card__details}>
          <h3> {props.resName} </h3>
          <h4> {props.resCuisine} </h4>
          <h4> {props.resStars} stars </h4>
          <h4> {props.resTiming} minutes </h4>
        </div>
      </div>
    </>
  )
}

export default RestroCard;