import { useEffect, useState } from "react";

export default function TaskFive() {
  const [safeFloor, setSafeFloor] = useState(null);

  function dropEgg(floor) {
    const breakingFloor = 72;
    if (floor >= breakingFloor) {
      return true;
    }
    return false;
  }

  function findHighestSafeFloor() {
    const floors = 100;
    let step = 1;
    let floor = step;

    while (floor <= floors) {
      if (dropEgg(floor)) break;
      step++;
      floor += step;
    }

    let low = floor - step + 1;

    let high = floor - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (dropEgg(mid)) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    setSafeFloor(high);
  }

  useEffect(() => {
    findHighestSafeFloor();
  }, []);

  return (
    <>
      <p>Breaking floor: 72</p>
      <p>
        Highest Safe Floor: {safeFloor !== null ? safeFloor : "Calculating..."}
      </p>
    </>
  );
}
