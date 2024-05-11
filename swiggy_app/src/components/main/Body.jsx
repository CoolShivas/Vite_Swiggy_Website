import styles from "./Body.module.css";
import RestroCard from "./RestroCard";

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="search_bar">
          Search Bar
          <div className={styles.restro_container}>

            <RestroCard resName={"Meghana Foods"}
              resCuisine={"Cheese Burger, North Indian, Asian"}
              resStars={4.8}
              resTiming={45}
            ></RestroCard>
            <RestroCard resName={"KFC"}
              resCuisine={"Butter Chicken, World Famous"}
              resStars={5}
              resTiming={25}
            ></RestroCard>

          </div>
        </div>
      </div>
    </>
  )
}

export default Body;