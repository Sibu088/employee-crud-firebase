import React, { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

export default function EmployeeForm() {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim()) {
      await addDoc(collection(db, 'employees'), { name });
      setName('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 bg-white p-6 rounded-2xl shadow-lg max-w-xl mx-auto"
    >
      <input
        type="text"
        placeholder="Enter employee name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all duration-200"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
      >
        🚀 Add Employee
      </button>
    </form>
  );
}
