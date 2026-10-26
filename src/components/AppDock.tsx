import AppButton, { type IAppButton } from "./ui/AppButton";
import mp from "../assets/images/apps/windows-media-player.png";
import bash from "../assets/images/apps/bash.png";
import photos from "../assets/images/apps/google-photos.png";
import obs from "../assets/images/apps/obs-studio.png";
import spotify from "../assets/images/apps/spotify.png";
import excel from "../assets/images/apps/microsoft-excel-2019.png";
import code from "../assets/images/apps/visual-studio-code-2019.png";
import studio from "../assets/images/apps/visual-studio.png";
import insiders from "../assets/images/apps/visual-studio-code-insides.png";
import notes from "../assets/images/apps/sticky-notes.png";
import weather from "../assets/images/apps/weather.png";
import chrome from "../assets/images/apps/chrome.png";
import claude from "../assets/images/apps/claude-ai.png";

const apps: IAppButton[] = [
  { name: "Bash", iconPath: bash },
  { name: "Google Photos", iconPath: photos },
  { name: "Windows Media Player", iconPath: mp },
  { name: "OBS Studio", iconPath: obs },
  { name: "Spotify", iconPath: spotify },
  { name: "Microsoft Excel", iconPath: excel },
  { name: "Visual Studio", iconPath: studio },
  { name: "Visual Studio Code", iconPath: code, active: true },
  { name: "Visual Studio Code Insiders", iconPath: insiders },
  { name: "Sticky Notes", iconPath: notes },
  { name: "Weather", iconPath: weather },
  { name: "Chrome", iconPath: chrome },
  { name: "Claude AI", iconPath: claude },
];

const AppDock = () => {
  return (
    <div className="app-dock">
      {apps.map((app, index) => (
        <AppButton key={index} name={app.name} iconPath={app.iconPath} active={app.active} />
      ))}
    </div>
  );
};

export default AppDock;
