import { useState } from "react";

const DiceFace = ({ value }: { value: number }) => {
  const dotPositions: Record<number, string[]> = {
    1: ["center"],
    2: ["top-left", "bottom-right"],
    3: ["top-left", "center", "bottom-right"],
    4: ["top-left", "top-right", "bottom-left", "bottom-right"],
    5: ["top-left", "top-right", "center", "bottom-left", "bottom-right"],
    6: ["top-left", "top-right", "middle-left", "middle-right", "bottom-left", "bottom-right"],
  };

  const getPosition = (pos: string) => {
    const positions: Record<string, string> = {
      "top-left": "top-4 left-4",
      "top-right": "top-4 right-4",
      "middle-left": "top-1/2 -translate-y-1/2 left-4",
      "middle-right": "top-1/2 -translate-y-1/2 right-4",
      "bottom-left": "bottom-4 left-4",
      "bottom-right": "bottom-4 right-4",
      "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    };
    return positions[pos] || "";
  };

  return (
    <div className="dice-face">
      {dotPositions[value]?.map((pos, index) => (
        <div
          key={index}
          className={`dot absolute ${getPosition(pos)}`}
        />
      ))}
    </div>
  );
};

const Dice = () => {
  const [value, setValue] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const rollDice = () => {
    if (isRolling) return;

    setIsRolling(true);
    setShowResult(false);

    // Simulate dice rolling with random values
    const rollInterval = setInterval(() => {
      setValue(Math.floor(Math.random() * 6) + 1);
    }, 100);

    // Stop rolling after animation
    setTimeout(() => {
      clearInterval(rollInterval);
      const finalValue = Math.floor(Math.random() * 6) + 1;
      setValue(finalValue);
      setIsRolling(false);
      setShowResult(true);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Dice Container */}
      <div className="dice-container animate-float" style={{ animationPlayState: isRolling ? 'paused' : 'running' }}>
        <div className={`dice ${isRolling ? 'rolling' : ''}`}>
          <DiceFace value={value} />
        </div>
      </div>

      {/* Result Display */}
      <div className="h-20 flex items-center justify-center">
        {showResult && !isRolling && (
          <div className="animate-bounce-in text-center">
            <p className="text-muted-foreground text-sm mb-1">Hai ottenuto</p>
            <p className="text-6xl font-bold gradient-text">{value}</p>
          </div>
        )}
      </div>

      {/* Roll Button */}
      <button
        onClick={rollDice}
        disabled={isRolling}
        className="btn-primary text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isRolling ? "Lanciando..." : "🎲 Scegli"}
      </button>
    </div>
  );
};

export default Dice;
