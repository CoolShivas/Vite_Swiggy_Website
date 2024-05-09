import styles from "./Body.module.css";
import RestroCard from "./RestroCard";

const Body = () => {
  return (
    <>
    <div className="body">
        <div className="search_bar">
            Search Bar
            <div className={styles.restro_container}>
                <RestroCard></RestroCard>
                <RestroCard></RestroCard>
                <RestroCard></RestroCard>
                <RestroCard></RestroCard>
                <RestroCard></RestroCard>
                <RestroCard></RestroCard>
                <RestroCard></RestroCard>
                <RestroCard></RestroCard>
                <RestroCard></RestroCard>
                <RestroCard></RestroCard>
                <RestroCard></RestroCard>
            </div>
        </div>
    </div>
    </>
  )
}

export default Body;