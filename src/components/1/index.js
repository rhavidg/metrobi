import { useEffect, useState } from "react";

export default function TaskOne() {
  const array = [1, 1, 2, 3, 3, 8];

  function findDuplicates(arr) {
    let duplicates = [];
    arr.forEach((item) => {
      const count = arr.filter((filter) => filter === item).length;

      if (count >= 2 && !duplicates.includes(item)) {
        duplicates.push(item);
      }
    });

    return duplicates;
  }
  const [duplicates, setDuplicates] = useState();
  useEffect(() => {
    const dupes = findDuplicates(array);
    setDuplicates(dupes);
  }, []);
  return (
    <>
      <p>Array: {array.join(",")}</p>
      {duplicates && <p>Duplicates in array: {duplicates.join(",")}</p>}
    </>
  );
}
