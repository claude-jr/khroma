import { BatteryLowIcon, HeadsetIcon, WifiIcon } from "lucide-react";

const ActivityBar = () => {
  return <div className="activity-bar">
    <div className="active-program">
      <span className="font-medium">
        Google Photos
      </span>
    </div>
    <div className="system-controls">
      <div className="temporal">
        <span>Sat, 24 Oct 2026</span>&nbsp;<span>00:35</span>
      </div>
      <div className="battery">
        <BatteryLowIcon size={18}/>
        <span>13%</span>
      </div>
      <div className="audio">
        <HeadsetIcon size={18}/>
      </div>
      <div className="network">
        <WifiIcon size={18}/>
      </div>
    </div>
  </div>;
};

export default ActivityBar;
