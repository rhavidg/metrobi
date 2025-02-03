import { useEffect, useState } from "react";
import { TypesContainer } from "./styles";

export default function TaskSeven() {
  const [displayResult, setDisplayResult] = useState();
  const [carrotTypes] = useState([
    { kg: 5, price: 100 },
    { kg: 7, price: 150 },
    { kg: 3, price: 70 },
  ]);
  const [capacity] = useState(36);

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
  }, [capacity, carrotTypes]);

  return (
    <>
      <p>Carrot Types:</p>
      {carrotTypes.map((item, index) => (
        <TypesContainer key={index}>
          <span>Type {index + 1}</span>
          <span>{item.kg}KG</span>
          <span>Price: ${item.price}</span>
        </TypesContainer>
      ))}

      <p>Bag capacity: {capacity}kg</p>
      <p>Result: {displayResult}</p>
    </>
  );
}
