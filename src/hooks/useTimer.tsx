import { useEffect, useState } from "react";
import { getTimeLeft } from "@react-dapp/utils";

export const useTimer = (futureTime: number) => {
  const [timeFinished, setTimeFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now() / 1000;
      if (now < futureTime) {
        setTimeLeft(
          getTimeLeft(futureTime - now) ?? {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          },
        );
        setTimeFinished(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setTimeFinished(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [futureTime]);

  return { timeFinished, timeLeft };
};
