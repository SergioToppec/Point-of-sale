import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function SearchBar({onSearch}) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex h-full w-full border-[2px] rounded-[30px] shadow-sm focus:shadow-md focus:border-azulOscuro ">
      <div className="flex h-full w-full bg-white rounded-[30px] border-[1px]focus:shadow-md focus:border-azulOscuro ">
        <div className="flex h-full w-full flex-arrow ">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Escriba el código o RFC del cliente que desea buscar"
            className="ml-5 w-full focus:outline-none focus:ring-0 rounded-lg"
          />
          <button type="button" className="mr-4 bg-white">
            <FaSearch size={20} className="text-azulOscuro" />
          </button>
        </div>
      </div>
    </form>
  );
}
