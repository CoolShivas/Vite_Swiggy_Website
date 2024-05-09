import styles from "./RestroCard.module.css";

const RestroCard = () => {
  return (
    <>
      <div className={styles.restro_card}>
        <div className={styles.restro_card__images}>
          
            <img src="../../../public/pexels-ash-122861-376464.jpg" alt="image not found" />
          
        </div>

        <div className={styles.restro_card__details}>
          <h3> Meghana Foods </h3>
          <h4> Cheese Burger, North Indian, Asian </h4>
          <h4> 4.4 stars </h4>
          <h4> 38 minutes </h4>
        </div>
      </div>
    </>
  )
}

export default RestroCard;