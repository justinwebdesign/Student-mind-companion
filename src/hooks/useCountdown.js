import { useState, useEffect, useCallback } from "react";

export function useCountdown(initialTime, onComplete) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [totalTime] = useState(initialTime);

  const start = useCallback(() => {
    setIsActive(true);
  }, []);

  const stop = useCallback(() => {
    setIsActive(false);
  }, []);

  const reset = useCallback(() => {
    setIsActive(false);
    setTimeLeft(totalTime);
  }, [totalTime]);

  const pause = useCallback(() => {
    setIsActive(false);
  }, []);

  const resume = useCallback(() => {
    if (timeLeft > 0) {
      setIsActive(true);
    }
  }, [timeLeft]);

  // Timer effect with proper cleanup
  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => {
          const newTime = prevTime - 1;
          if (newTime <= 0) {
            setIsActive(false);
            if (onComplete) {
              onComplete();
            }
            return 0;
          }
          return newTime;
        });
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    // Cleanup function to clear interval
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, timeLeft, onComplete]);

  // Reset timeLeft when initialTime changes
  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  const progress = totalTime > 0 ? ((totalTime - timeLeft) / totalTime) * 100 : 0;

  return {
    timeLeft,
    isActive,
    progress,
    start,
    stop,
    reset,
    pause,
    resume,
    totalTime
  };
}
