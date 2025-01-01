import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission
    onSearch(query); // Call the onSearch function passed as a prop
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center justify-center mb-4">
      <input
        type="text"
        placeholder="Search documents..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border z-[15] border-gray-300 rounded-l-md p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 z-[15] text-white rounded-r-md p-2 hover:bg-blue-600 transition duration-200"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;