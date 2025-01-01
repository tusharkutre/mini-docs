import React, { useState } from "react";
import Background from "./components/Background";
import SearchBar from "./components/SearchBar";
import Document from "./components/Document"; // Ensure this is correctly imported

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [documents] = useState([
    { id: 1, title: "React Basics", content: "Learn the basics of React." },
    { id: 2, title: "Advanced React", content: "Deep dive into React." },
    { id: 3, title: "Tailwind CSS", content: "Styling with Tailwind CSS." },
    { id: 4, title: "Vite Setup", content: "Setting up Vite for React." },
    // Add more documents as needed
  ]);

  const handleSearch = (query) => {
    const filteredDocuments = documents.filter((doc) =>
      doc.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredDocuments);
  };

  return (
    <>
      <div>
        <Background />
        <SearchBar onSearch={handleSearch} />
        {/* Display search results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchResults.length > 0 ? (
            searchResults.map((result) => (
              <Document key={result.id} data={result} />
            ))
          ) : (
            <p className="text-center text-gray-500">No results found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default App;