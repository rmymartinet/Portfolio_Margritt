import FilterButton from "./FilterButton.jsx";
import GridButton from "./GridButton.jsx";

const FilterControl = ({
  setItem,
  isGridClick,
  setIsGridClick,
  isButtonFilterIsClicked,
  setIsButtonFilterIsClicked,
}) => {
  return (
    <div className="button-container">
      <div className="grid-button-container">
        <GridButton isGridClick={isGridClick} setIsGridClick={setIsGridClick} />
      </div>
      <div className="filter-container">
        <div className="filter-title">
          <span>Filter</span>
        </div>
        <div className="filter-button">
          <FilterButton
            setItem={setItem}
            setIsButtonFilterIsClicked={setIsButtonFilterIsClicked}
            isButtonFilterIsClicked={isButtonFilterIsClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterControl;
