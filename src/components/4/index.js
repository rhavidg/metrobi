import { useEffect, useState } from "react";

export default function TaskFour() {
  const [input, setInput] = useState("asdasd{}");
  const [isValid, setIsValid] = useState(false);

  function bracketsMatch(input) {
    const stack = [];
    const pairs = { "(": ")", "[": "]", "{": "}" };

    for (const char of input) {
      if (char in pairs) {
        stack.push(char);
      } else if (Object.values(pairs).includes(char)) {
        if (stack.length === 0 || pairs[stack.pop()] !== char) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

  useEffect(() => {
    setIsValid(bracketsMatch(input));
  }, [input]);

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>{`Is valid: ${isValid}`}</p>
    </>
  );
}
