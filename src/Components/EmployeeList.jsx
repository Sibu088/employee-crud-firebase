import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'employees'), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEmployees(data);
    });
    return () => unsub();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'employees', id));
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Employee List</h2>
      <ul className="space-y-4">
        {employees.map(emp => (
          <li
            key={emp.id}
            className="flex justify-between items-center p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition duration-200"
          >
            <span className="text-gray-800 font-medium">{emp.name}</span>
            <button
              onClick={() => handleDelete(emp.id)}
              className="text-red-500 hover:text-red-700 font-semibold transition"
            >
              ❌ Delete
            </button>
          </li>
        ))}
        {employees.length === 0 && (
          <li className="text-center text-gray-500">No employees found.</li>
        )}
      </ul>
    </div>
  );
}
