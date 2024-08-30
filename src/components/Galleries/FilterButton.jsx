import { useMemo } from "react";
import { galleriesData } from "../../data/data";
import FilterButtonComponent from "./FilterButtonComponent";

const FilterButton = ({
  setItem,
  setIsButtonFilterIsClicked,
  isButtonFilterIsClicked,
}) => {
  const [originaux, tirages] = galleriesData;
  const totalWorks = originaux.length;

  const largeFormat = useMemo(
    () => originaux.filter((item) => item.dimension === "large"),
    [originaux]
  );

  const mediumFormat = useMemo(
    () => originaux.filter((item) => item.formatOriginaux === "medium"),
    [originaux]
  );
  return (
    <>
      <div className="filter-button">
        <FilterButtonComponent
          onClick={() => {
            setIsButtonFilterIsClicked("all");
            setItem([...originaux]);
          }}
          isActive={isButtonFilterIsClicked === "all"}
        >
          ({totalWorks}) All
        </FilterButtonComponent>
        <FilterButtonComponent
          onClick={() => {
            setIsButtonFilterIsClicked("originaux large");
            setItem(largeFormat);
          }}
          isActive={isButtonFilterIsClicked === "originaux large"}
        >
          ({largeFormat.length}) Originaux Large
        </FilterButtonComponent>
        <FilterButtonComponent
          onClick={() => {
            setIsButtonFilterIsClicked("originaux medium");
            setItem(mediumFormat);
          }}
          isActive={isButtonFilterIsClicked === "originaux medium"}
        >
          ({mediumFormat.length}) Originaux Medium
        </FilterButtonComponent>

        <FilterButtonComponent
          onClick={() => {
            setIsButtonFilterIsClicked("tirages disponibles");
            setItem(tirages);
          }}
          isActive={isButtonFilterIsClicked === "tirages disponibles"}
        >
          ({tirages.length}) Tirages disponibles
        </FilterButtonComponent>
      </div>
    </>
  );
};

export default FilterButton;
