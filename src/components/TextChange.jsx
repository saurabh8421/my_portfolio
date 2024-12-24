import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Front End Developer", "UI-UX Designer", "Computer Science & Engineering"];
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentString = texts[textIndex];

      
      setCurrentText(currentString.substring(0, charIndex));

      
      if (isForward) {
        if (charIndex < currentString.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setIsForward(false); 
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setIsForward(true); 
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 90);

    return () => clearInterval(intervalId); 
  }, [charIndex, isForward, textIndex, texts]);

  return <span className="transition ease-in-out duration-300 text-sky-400">{currentText}</span>;
};

export default TextChange;
