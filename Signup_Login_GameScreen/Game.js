// GameScreen.js
import React, { useState } from 'react';

const GameScreen = () => {
  const [balloonSize, setBalloonSize] = useState(50); // Initial size of the balloon

  const pumpBalloon = () => {
    // Increase the size of the balloon when pumped
    setBalloonSize((prevSize) => prevSize + 10);
    
    // Check if the balloon is pumped too much (you can adjust the threshold)
    if (balloonSize >= 150) {
      alert('Balloon popped! Game Over.');
      // You can handle game over logic here
      // For example, redirect to a game over screen or reset the game
      setBalloonSize(50); // Reset balloon size
    }
  };

  return (
    <div className="container mx-auto mt-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Balloon Pumping Game</h2>
      <div
        className="relative inline-block bg-yellow-300 border border-yellow-500 rounded-full p-4 cursor-pointer"
        style={{ width: balloonSize, height: balloonSize }}
        onClick={pumpBalloon}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          🎈
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
