import { IoGridOutline } from "react-icons/io5";

const GridButton = ({ setIsGrid, setIsGridClick }) => {
  const handleGrid = () => {
    setIsGrid((prev) => !prev);
  };

  return (
    <div
      className="grid-button"
      onClick={() => {
        setIsGridClick((prev) => !prev);
        handleGrid();
      }}
    >
      <IoGridOutline />
    </div>
  );
};

export default GridButton;
