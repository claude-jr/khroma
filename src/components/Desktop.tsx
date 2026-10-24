// import ventura from "../assets/images/macos-ventura.jpg";
// import greenLeaves from "../assets/images/green-leaves.jpg"
import earth from "../assets/images/earth.jpg";
import AppDock from "./AppDock";

const Desktop = () => {
  return (
    <div
      className="w-screen h-screen relative"
      style={{
        backgroundImage: `url(${earth})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <AppDock />
    </div>
  );
};

export default Desktop;
