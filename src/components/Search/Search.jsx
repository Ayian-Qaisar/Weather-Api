import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ onInputChange, handelSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(""); // State for error message

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onInputChange(newValue);

    setError("");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      setError("Please enter a location.");
    } else {
      setError("");
      handelSubmit();
      setInputValue("");
    }
  };

  return (
    <div>
      <form
        onSubmit={onFormSubmit}
        className="bg-[#232B39] py-2 px-3 rounded-md flex items-center gap-4"
      >
        <FaSearch className="text-[#8F94AF] text-[14px]" />
        <input
          type="text"
          placeholder="Search For Places..."
          value={inputValue}
          onChange={handleInputChange}
          className="bg-transparent text-[#8F94AF] text-[14px] outline-none"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}{" "}
        {/* Display error message */}
      </form>
    </div>
  );
};

export default Search;
