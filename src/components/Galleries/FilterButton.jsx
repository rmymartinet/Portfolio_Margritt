// import { galleriesData } from "../../data.js";

// const FilterButton = ({
//   filterItem,
//   setItem,
//   setIsButtonFilterIsClicked,
//   isButtonFilterIsClicked,
// }) => {
//   const [originaux, tirages] = galleriesData;
//   return (
//     <>
//       <div className="filter-button">
//         <div
//           className=""
//           style={{ opacity: isButtonFilterIsClicked === "All" ? 1 : 0.4 }}
//           onClick={() => {
//             setIsButtonFilterIsClicked("All");
//             setItem([...originaux, ...tirages]);
//           }}
//         >
//           (10) All
//         </div>
//         <div
//           className=""
//           style={{ opacity: isButtonFilterIsClicked === "Large" ? 1 : 0.4 }}
//           onClick={() => {
//             setIsButtonFilterIsClicked("Large");
//             filterItem("large");
//           }}
//         >
//           (4) Originaux
//         </div>
//         <div
//           className=""
//           style={{ opacity: isButtonFilterIsClicked === "Medium" ? 1 : 0.4 }}
//           onClick={() => {
//             setIsButtonFilterIsClicked("Medium");
//             filterItem("medium");
//           }}
//         >
//           (3) Tirages
//         </div>
//       </div>
//     </>
//   );
// };

// export default FilterButton;

import { galleriesData } from "../../data.js";

const FilterButton = ({
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
          style={{ opacity: isButtonFilterIsClicked === "originaux" ? 1 : 0.4 }}
          onClick={() => {
            setIsButtonFilterIsClicked("originaux");
            setItem(originaux);
          }}
        >
          (4) Originaux
        </div>
        <div
          className=""
          style={{ opacity: isButtonFilterIsClicked === "tirages" ? 1 : 0.4 }}
          onClick={() => {
            setIsButtonFilterIsClicked("tirages");
            setItem(tirages);
          }}
        >
          (3) Tirages
        </div>
      </div>
    </>
  );
};

export default FilterButton;
