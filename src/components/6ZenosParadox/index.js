import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ZenosParadox() {
  const [achillesPosition, setAchillesPosition] = useState(0);
  const [tortoisePosition, setTortoisePosition] = useState(200);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step > 20) return;

    const timeout = setTimeout(() => {
      setAchillesPosition(
        achillesPosition + (tortoisePosition - achillesPosition) / 2
      );
      setTortoisePosition(tortoisePosition + 30);
      setStep(step + 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [achillesPosition, tortoisePosition, step]);

  return (
    <div className="p-4">
      <motion.div
        animate={{ x: achillesPosition }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        🏃‍♂️ Achilles
      </motion.div>
      <motion.div
        animate={{ x: tortoisePosition }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        🐢 Tortoise
      </motion.div>
      <p>
        Step: {step} | Achilles: {Math.round(achillesPosition)}px | Tortoise:{" "}
        {Math.round(tortoisePosition)}px
      </p>
    </div>
  );
}
