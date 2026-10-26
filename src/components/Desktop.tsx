// import ventura from "../assets/images/macos-ventura.jpg";
import greenLeaves from "../assets/images/green-leaves.jpg"
// import earth from "../assets/images/earth.jpg";
import ActivityBar from "./ActivityBar";
import AppDock from "./AppDock";

const Desktop = () => {
  return (
    <div
      className="w-screen h-screen relative"
      style={{
        backgroundImage: `url(${greenLeaves})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ActivityBar />
      <AppDock />
    </div>
  );
};

export default Desktop;
