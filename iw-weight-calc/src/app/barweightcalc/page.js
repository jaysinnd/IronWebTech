"use client";
import { useState } from "react";

// Mapping from weight to CSS classes for color and height
const getPlateStyle = (weight) => {
  const plateStyles = {
    55: "bg-red-600 h-20",   // Red, tallest
    45: "bg-blue-600 h-20",  // Blue
    35: "bg-yellow-500 h-16",// Yellow
    25: "bg-green-600 h-14", // Green
    10: "bg-white h-12 border border-gray-900", // White with black border
    5: "bg-black h-10 border border-white",     // Black with white border
    2.5: "bg-gray-500 h-5",  // Grey, shortest
  };
  return plateStyles[weight] || "bg-gray-400 h-5"; // Fallback style
};

// Flatten the plate breakdown
const flattenPlateBreakdown = (breakdown) => {
  return breakdown
    .flatMap((plate) => Array(plate.count).fill(plate.weight))
    .sort((a, b) => b - a); // Sort in descending order of weight
};

export default function BarWeightCalc() {
  const [barWeight, setBarWeight] = useState("");
  const [totalWeight, setTotalWeight] = useState("");
  const [plateBreakdown, setPlateBreakdown] = useState([]);
  const [flatPlates, setFlatPlates] = useState([]);

  const calculatePlates = () => {
    const availablePlates = [55, 45, 35, 25, 10, 5, 2.5];
    const targetWeight = (parseFloat(totalWeight) - parseFloat(barWeight)) / 2;
    let remainingWeight = targetWeight;

    const breakdown = availablePlates.reduce((acc, plate) => {
      const count = Math.floor(remainingWeight / plate);
      if (count > 0) {
        acc.push({ weight: plate, count });
        remainingWeight -= count * plate;
      }
      return acc;
    }, []);

    setPlateBreakdown(breakdown);
    setFlatPlates(flattenPlateBreakdown(breakdown));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Powerlifting</h1>
        <h1 className="text-4xl font-bold mb-4">Plate Calculator</h1>
        <div className="flex flex-col space-y-4">
          <input
            type="number"
            value={barWeight}
            onChange={(e) => setBarWeight(e.target.value)}
            placeholder="Enter bar weight (lbs)"
            className="p-2 border border-gray-300 rounded text-black"
          />
          <input
            type="number"
            value={totalWeight}
            onChange={(e) => setTotalWeight(e.target.value)}
            placeholder="Enter total weight (lbs)"
            className="p-2 border border-gray-300 rounded text-black"
          />
          <button
            onClick={calculatePlates}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Calculate Plates
          </button>
        </div>
        <div className="mt-8">
          {plateBreakdown.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Plate Breakdown</h2>
              <ul className="list-disc text-left">
                {plateBreakdown.map((plate, index) => (
                  <li key={index}>
                    {`${plate.count} x ${plate.weight}lb plate`}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {flatPlates.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Plates Layout</h3>
              <div
                className="flex justify-center items-center h-32 space-x-1"
                // Adjust h-32 based on the maximum height needed
              >
                {flatPlates.map((weight, index) => (
                  <div
                    key={index}
                    className={`w-2 ${getPlateStyle(weight)}`}
                  ></div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
