import { useState, useEffect } from "react";

function Loading() {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev % 3) + 1);
    }, 350);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="-z-20 bg-black">
      <div className="loading-screen fixed inset-0 flex items-center justify-center bg-black">
        <div
          className="horse-animation"
          style={{ backgroundImage: `url(./Logo.svg)` }}
        />
      </div>
      <div className="fixed inset-0 flex items-center justify-center text-white">
        <p className="font-mono text-6xl">{`Loading${".".repeat(dots)}`}</p>
      </div>
    </div>
  );
}

export default Loading;
