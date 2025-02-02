import { useEffect, useState } from "react";

export default function TaskSeven() {
  const [displayResult, setDisplayResult] = useState();
  const carrotTypes = [
    { kg: 5, price: 100 },
    { kg: 7, price: 150 },
    { kg: 3, price: 70 },
  ];
  const capacity = 36;
  function getMaxValueRecursive(carrotTypes, capacity) {
    function helper(index, remainingCapacity) {
      if (index >= carrotTypes.length || remainingCapacity <= 0) return 0;

      let carrot = carrotTypes[index];
      let takeWeight = Math.min(carrot.kg, remainingCapacity);
      let valueGained = (takeWeight / carrot.kg) * carrot.price;

      return valueGained + helper(index + 1, remainingCapacity - takeWeight);
    }

    return helper(0, capacity);
  }

  useEffect(() => {
    const result = getMaxValueRecursive(carrotTypes, capacity);
    setDisplayResult(result);
  }, []);

  return (
    <>
      <p>Result: {displayResult}</p>
    </>
  );
}
