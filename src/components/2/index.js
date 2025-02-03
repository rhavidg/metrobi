import { useEffect, useState } from "react";

export default function TaskTwo() {
  const [displayItems, setDisplayItems] = useState([]);
  const [displayDelay, setDisplayDelay] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const array = ["a", "b", "c", "d", "e"];

  async function printWithDelay(arr) {
    let delay = 1000;

    for (let item of arr) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      setDisplayItems(...displayItems, item);
      setDisplayDelay(...displayDelay, delay);
      //   console.log("Item: ", item);
      //   console.log("Delay: ", delay, "ms");
      delay *= 2;
    }
  }

  async function main() {
    await printWithDelay(array);
    setIsFinished(true);
  }
  useEffect(() => {
    main();
  }, []);
  return (
    <>
      <p>Array: {array.join(",")}</p>
      <p>Item: {displayItems}</p>
      <p>Delay: {displayDelay}</p>
      <p>{!isFinished ? "Still printing" : "Finished printing"}</p>
    </>
  );
}
