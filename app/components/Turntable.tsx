import React, { useState } from "react";

interface TurntableProps {
  restaurants: string[];
  onSpin: (winner: string) => void;
}

const Turntable: React.FC<TurntableProps> = ({ restaurants, onSpin }) => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const spin = () => {
    setSpinning(true);
    const newRotation = Math.floor(Math.random() * 360) + 720; // At least 2 full spins
    setRotation(newRotation);

    setTimeout(() => {
      setSpinning(false);
      const winnerIndex = Math.floor(
        (360 - (newRotation % 360)) / (360 / restaurants.length)
      );
      onSpin(restaurants[winnerIndex]);
    }, 3000);
  };

  return (
    <div className="relative w-64 h-64 mx-auto">
      <div
        className={`w-full h-full rounded-full overflow-hidden border-4 border-orange-300 transition-transform duration-3000 ease-out`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className={`absolute w-1/2 h-1/2 origin-bottom-right ${
              index % 2 === 0 ? "bg-orange-200" : "bg-orange-100"
            }`}
            style={{
              transform: `rotate(${
                (360 / restaurants.length) * index
              }deg) skew(${90 - 360 / restaurants.length}deg)`,
            }}
          >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 rotate-90 origin-left text-xs mt-2">
              {restaurant}
            </span>
          </div>
        ))}
      </div>
      {[...Array(restaurants.length)].map((_, index) => (
        <div
          key={index}
          className={`absolute w-3 h-3 rounded-full ${
            index % 3 === 0 ? "bg-red-500" : "bg-white"
          }`}
          style={{
            top: `${
              50 - 48 * Math.cos((Math.PI * 2 * index) / restaurants.length)
            }%`,
            left: `${
              50 + 48 * Math.sin((Math.PI * 2 * index) / restaurants.length)
            }%`,
          }}
        />
      ))}
      <button
        onClick={spin}
        disabled={spinning}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full z-10"
      >
        Spin
      </button>
    </div>
  );
};

export default Turntable;
