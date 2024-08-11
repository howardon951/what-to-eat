"use client";

import React, { useState } from "react";
import Turntable from "./components/Turntable";
import Modal from "./components/Modal";

export default function Home() {
  const [restaurants, setRestaurants] = useState<string[]>([]);
  const [newRestaurant, setNewRestaurant] = useState("");
  const [winner, setWinner] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addRestaurant = () => {
    if (newRestaurant.trim()) {
      setRestaurants([...restaurants, newRestaurant.trim()]);
      setNewRestaurant("");
    }
  };

  const handleSpin = (winner: string) => {
    setWinner(winner);
    setIsModalOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">What to Eat?</h1>
      <div className="mb-8">
        <input
          type="text"
          value={newRestaurant}
          onChange={(e) => setNewRestaurant(e.target.value)}
          className="border border-gray-300 text-black rounded px-4 py-2 mr-2"
          placeholder="Enter restaurant name"
        />
        <button
          onClick={addRestaurant}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      {restaurants.length > 0 ? (
        <Turntable />
      ) : (
        // <Turntable restaurants={restaurants} onSpin={handleSpin} />
        <p>Add some restaurants to start spinning!</p>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        winner={winner}
      />
    </main>
  );
}
