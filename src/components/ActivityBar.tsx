import {
  AlarmClockIcon,
  Volume2Icon,
  WifiIcon,
  WifiHighIcon,
  WifiLowIcon,
  BatteryCharging,
  CastIcon,
  WifiOffIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// hook
const useNetworkIndicator = () => {
  let strength: "high" | "medium" | "low" | undefined;
  if ("connection" in navigator) {
    const effectiveType = navigator.connection.effectiveType as string;
    switch (effectiveType) {
      case "4g":
        strength = "high";
        break;
      case "3g":
        strength = "medium";
        break;
      case "2g":
        strength = "low";
        break;
      default:
        strength = undefined;
        break;
    }
  } else {
    console.error("Connection API not supported by browser");
  }
  return { strength };
};

const ActivityBar = () => {
  const formatTime = () => {
    const date = new Date();
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  const [time, setTime] = useState(formatTime());

  const { strength } = useNetworkIndicator();

  const formatDate = () => {
    const date = new Date();
    const day = daysOfWeek[date.getDay()].slice(0, 3);
    const month = monthsOfYear[date.getMonth()].slice(0, 3);

    return `${day}, ${date.getDate()} ${month}. ${date.getFullYear()}`;
  };

  useEffect(() => {
    let timer;

    clearTimeout(timer);
    timer = setTimeout(() => {
      setTime(formatTime());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  return (
    <div className="activity-bar">
      <div className="active-program">
        <span className="font-medium">Visual Studio Code</span>
        <div className="active-program_menus">
          <span>File</span>
          <span>Edit</span>
          <span>Selection</span>
          <span>View</span>
          <span>Go</span>
          <span>Run</span>
          <span>Terminal</span>
          <span>Help</span>
        </div>
      </div>
      <div className="system-controls">
        <div className="temporal">
          <span>{formatDate()}</span>&nbsp;
          <span className="w-13 flex gap-px items-center justify-center">
            <span className="w-[13px] flex justify-center">
              {time.slice(0, 2)}
            </span>
            :
            <span className="w-[13px] flex justify-center">
              {time.slice(3, 5)}
            </span>
            :
            <span className="w-[13px] flex justify-center">
              {time.slice(6, 8)}
            </span>
          </span>
        </div>
        <div
          className="battery font-bold"
          style={{ color: "var(--color-green-400)" }}
        >
          <BatteryCharging size={18} />
          <span>43%</span>
        </div>
        <div className="audio">
          <Volume2Icon size={17} />
        </div>
        <div className="network">
          {strength === "high" ? (
            <WifiIcon size={17} />
          ) : strength === "medium" ? (
            <WifiHighIcon size={17} />
          ) : strength === "low" ? (
            <WifiLowIcon size={17} />
          ) : (
            <WifiOffIcon size={17} />
          )}
        </div>

        <div className="network">
          <CastIcon color="var(--color-orange-400)" size={16} />
        </div>
        <div className="network">
          <AlarmClockIcon size={17} />
        </div>
      </div>
    </div>
  );
};

export default ActivityBar;
