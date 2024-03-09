import { galleriesData } from "../../data.js";

const FilterButton = ({
  filterItem,
  setItem,
  setIsButtonFilterIsClicked,
  isButtonFilterIsClicked,
}) => {
  const [originaux, tirages] = galleriesData;
  return (
    <>
      <div className="filter-button">
        <div
          className=""
          style={{ opacity: isButtonFilterIsClicked === "All" ? 1 : 0.4 }}
          onClick={() => {
            setIsButtonFilterIsClicked("All");
            setItem([...originaux, ...tirages]);
          }}
        >
          (10) All
        </div>
        <div
          className=""
          style={{ opacity: isButtonFilterIsClicked === "Large" ? 1 : 0.4 }}
          onClick={() => {
            setIsButtonFilterIsClicked("Large");
            filterItem("large");
          }}
        >
          (4) Large
        </div>
        <div
          className=""
          style={{ opacity: isButtonFilterIsClicked === "Medium" ? 1 : 0.4 }}
          onClick={() => {
            setIsButtonFilterIsClicked("Medium");
            filterItem("medium");
          }}
        >
          (3) Medium
        </div>
      </div>
    </>
  );
};

export default FilterButton;
