import { useEffect, useState } from "react";

export default function TaskOne() {
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
    const dupes = findDuplicates([1, 1, 2, 3, 3, 8]);
    setDuplicates(dupes);
  }, []);
  return (
    <>
      <p>Array: {[1, 1, 2, 3, 3, 8].join(",")}</p>
      {duplicates && <p>Duplicates in array: {duplicates.join(",")}</p>}
    </>
  );
}
