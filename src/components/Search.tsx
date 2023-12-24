import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <div>
      <div className="border border-solid border-gray-400 w-[310px] h-[35px] ml-2 mt-5 flex items-center">
        <div className="ml-2">
          <FaSearch id="search-icon" />
        </div>
        <input
          type="text"
          placeholder="Search Products"
          className="ml-3"
          style={{ outline: "none" }}
        />
        <button
          className="ml-5 text-white w-[70px] h-[30px] rounded"
          style={{ background: "#ffb366" }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
