const FilterButtonComponent = ({ onClick, isActive, children }) => (
  <div className="" style={{ opacity: isActive ? 1 : 0.5 }} onClick={onClick}>
    {children}
  </div>
);

export default FilterButtonComponent;
