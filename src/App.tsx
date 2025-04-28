import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-red-500 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-primary-600 mb-4">
          Hello, Vite + React + TypeScript!
        </h1>
        <p className="text-gray-600">
          This is a modern web application built with Vite, React, TypeScript,
          and Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default App;
