import ventura from "../assets/images/macos-ventura.jpg";
import ActivityBar from "./ActivityBar";

const Desktop = () => {
  return (
    <div
      className="w-screen h-screen"
      style={{ background: `url(${ventura}) center`, backgroundSize: "cover" }}
    >
      <ActivityBar />
    </div>
  );
};

export default Desktop;
