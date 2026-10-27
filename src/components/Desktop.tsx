import ventura from "../assets/images/macos-ventura.jpg";
// import greenLeaves from "../assets/images/green-leaves.jpg"
// import earth from "../assets/images/earth.jpg";
import ActivityBar from "./ActivityBar";
import AppDock from "./AppDock";
import Window, { type WindowProps } from "./ui/Window";

const Desktop = () => {
  const windows: WindowProps[] = [
    { top: 0, left: 90 },
    { top: 202, left: 430 },
    { top: 45, left: 20 },
  ];

  return (
    <div
      className="w-screen h-screen relative overflow-clip"
      style={{
        backgroundImage: `url(${ventura})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ActivityBar />
      {
        windows.map((wp, i) => <Window top={wp.top} left={wp.left} key={i} />)
      }
      <AppDock />
    </div>
  );
};

export default Desktop;
