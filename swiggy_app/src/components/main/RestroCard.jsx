import styles from "./RestroCard.module.css";

const RestroCard = ({ resName, resCuisine, resStars, resTiming }) => {
  return (
    <>
      <div className={styles.restro_card}>
        <div className={styles.restro_card__images}>

          <img src="../../../public/pexels-ash-122861-376464.jpg" alt="image not found" />

        </div>

        <div className={styles.restro_card__details}>
          <h3> {resName} </h3>
          <h4> {resCuisine} </h4>
          <h4> {resStars} stars </h4>
          <h4> {resTiming} minutes </h4>
        </div>
      </div>
    </>
  )
}

export default RestroCard;