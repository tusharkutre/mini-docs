import React from 'react';

const Document = ({ data }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
      <h2 className="font-bold text-lg">{data.title}</h2>
      <p className="text-gray-600">{data.content}</p>
    </div>
  );
};

export default Document;