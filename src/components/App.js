import React, { useState, useEffect } from 'react';

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const calculateSum = () => {
      const totalSum = numbers.reduce((acc, num) => acc + num, 0);
      setSum(totalSum);
    };

    calculateSum();
  }, [numbers]);

  const handleNumberInput = (event) => {
    const parsedNumber = parseInt(event.target.value, 10);
    if (!Number.isNaN(parsedNumber)) {
      setNumbers((prevNumbers) => [...prevNumbers, parsedNumber]);
    }
  };

  return (
    <div>
      <h2>Sum Calculator</h2>
      <input type="number" onChange={handleNumberInput} />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;
