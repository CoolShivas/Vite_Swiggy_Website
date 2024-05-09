import RestroCard from "./RestroCard";

const Body = () => {
  return (
    <>
    <div className="body">
        <div className="search_bar">
            Search Bar
            <div className="restro_container">
                <RestroCard></RestroCard>
            </div>
        </div>
    </div>
    </>
  )
}

export default Body;