import "./search-box.styles.css";

const SearchBox = ({ onSearchChange, className, placeholder }) => {
  return (
    <input
      className={className}
      type="text"
      onChange={onSearchChange}
      placeholder={placeholder}
    />
  );
};

export default SearchBox;
