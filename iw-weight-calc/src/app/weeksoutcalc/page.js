"use client";
import { useState } from 'react';

export default function compareDates() {
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);
  const [targetDate, setTargetDate] = useState('');
  const [weeksBetween, setWeeksBetween] = useState(null);

  const calculateWeeksBetween = () => {
    const date1 = new Date(currentDate);
    const date2 = new Date(targetDate);
    const differenceInTime = date2.getTime() - date1.getTime();
    const differenceInWeeks = Math.floor(differenceInTime / (1000 * 60 * 60 * 24 * 7));
    setWeeksBetween(differenceInWeeks);
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Calculate how many weeks</h1>
        <h1 className="text-4xl font-bold mb-4">from a Meet</h1>
        <div className="flex flex-col space-y-4">
          <input 
          type="date" 
          value={currentDate} 
          onChange={(e) => setCurrentDate(e.target.value)}
          style={{ color: 'black' }}  />
          <input 
          type="date" 
          value={targetDate} 
          onChange={(e) => setTargetDate(e.target.value)}
          style={{ color: 'black' }}  />
          <button onClick={calculateWeeksBetween}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-white">Calculate Weeks Between</button>
          <div>{weeksBetween}</div>
        </div>
      </main>
    </div>
  );
}