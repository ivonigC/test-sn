import React, { useState } from 'react';

export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2" onClick={increment}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
};
