import React, { useState, useCallback } from "react";


type ButtonProps = {
  onClick: () => void;
  label: string;
};


const Button: React.FC<ButtonProps> = React.memo(({ onClick, label }) => {
  console.log("Child rendered:", label);
  return (
    <button 
      onClick={onClick} 
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
    >
      {label}
    </button>
  );
});

    const UseCallback: React.FC = () => {
         const [count, setCount] = useState<number>(0);
        const [other, setOther] = useState<number>(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Count: {count}</h2>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Other: {other}</h2>

        <div className="space-y-4">
            <Button onClick={increment} label="Increment Count" />

            <button 
              onClick={() => setOther((prev) => prev + 1)}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 w-full"
            >
              Change Other State
            </button>
        </div>
    </div>
  );
};

export default UseCallback;
