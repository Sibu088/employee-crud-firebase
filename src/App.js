import React from 'react';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeList from './Components/EmployeeList';
import './App.css'; // Assuming you have some global styles

export default function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Employee Manager</h1>
      <EmployeeForm />
      <EmployeeList />
    </div>
  );
}
