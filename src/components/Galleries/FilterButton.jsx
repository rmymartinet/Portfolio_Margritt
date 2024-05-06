import { galleriesData } from "../../data.js";

const FilterButton = ({
  setItem,
  setIsButtonFilterIsClicked,
  isButtonFilterIsClicked,
}) => {
  const [originaux, tirages] = galleriesData;
  const totalWorks = originaux.length;

  const largeFormat = originaux.filter(
    (item) => item.formatOriginaux === "large"
  );
  const mediumFormat = originaux.filter(
    (item) => item.formatOriginaux === "medium"
  );

  return (
    <>
      <div className="filter-button">
        <div
          className=""
          style={{ opacity: isButtonFilterIsClicked === "all" ? 1 : 0.6 }}
          onClick={() => {
            setIsButtonFilterIsClicked("all");
            setItem([...originaux]);
          }}
        >
          ({totalWorks}) All
        </div>
        <div
          className=""
          style={{
            opacity: isButtonFilterIsClicked === "originaux large" ? 1 : 0.6,
          }}
          onClick={() => {
            setIsButtonFilterIsClicked("originaux large");
            setItem(largeFormat);
          }}
        >
          ({largeFormat.length}) Originaux Large
        </div>
        <div
          className=""
          style={{
            opacity: isButtonFilterIsClicked === "originaux medium" ? 1 : 0.6,
          }}
          onClick={() => {
            setIsButtonFilterIsClicked("originaux medium");
            setItem(mediumFormat);
          }}
        >
          ({mediumFormat.length}) Originaux Medium
        </div>
        <div
          className=""
          style={{
            opacity:
              isButtonFilterIsClicked === "tirages disponibles" ? 1 : 0.6,
          }}
          onClick={() => {
            setIsButtonFilterIsClicked("tirages disponibles");
            setItem(tirages);
          }}
        >
          ({tirages.length}) Tirages disponibles
        </div>
      </div>
    </>
  );
};

export default FilterButton;
