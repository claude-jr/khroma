import ventura from "../assets/images/macos-ventura.jpg";
// import greenLeaves from "../assets/images/green-leaves.jpg"
// import earth from "../assets/images/earth.jpg";
import ActivityBar from "./ActivityBar";
import AppDock from "./AppDock";
import Window from "./Window";

const Desktop = () => {
  return (
    <div
      className="w-screen h-screen relative"
      style={{
        backgroundImage: `url(${ventura})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ActivityBar />
      <Window />
      <AppDock />
    </div>
  );
};

export default Desktop;
