import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ZenosParadoxSolved() {
  const [achillesPosition, setAchillesPosition] = useState(0);
  const [tortoisePosition, setTortoisePosition] = useState(50);
  const [running, setRunning] = useState(true);
  const [steps, setSteps] = useState(0);
  const [distance, setDistance] = useState(tortoisePosition - achillesPosition);
  const achillesSpeed = 12;
  const tortoiseSpeed = 10;

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      const nextAchillesPosition = achillesPosition + achillesSpeed;
      const nextTortoisePosition = tortoisePosition + tortoiseSpeed;
      const newDistance = Math.abs(nextTortoisePosition - nextAchillesPosition);

      setSteps((prev) => prev + 1);
      setDistance(newDistance);

      if (nextAchillesPosition >= nextTortoisePosition) {
        setAchillesPosition(nextTortoisePosition);
        setRunning(false);
        clearInterval(interval);
      } else {
        setAchillesPosition(nextAchillesPosition);
        setTortoisePosition(nextTortoisePosition);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [running, achillesPosition, tortoisePosition]);

  return (
    <div>
      <div>
        <motion.div
          animate={{ x: achillesPosition }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          🏃‍♂️
        </motion.div>
        <motion.div
          animate={{ x: tortoisePosition }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          🐢
        </motion.div>
      </div>
      <p>
        Distance: {distance.toFixed(2)}px | Steps: {steps}
      </p>
    </div>
  );
}
