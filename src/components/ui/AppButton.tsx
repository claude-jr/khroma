export interface IAppButton {
  name: string;
  iconPath: string;
  active?: boolean;
}

const AppButton = ({ name, iconPath, active }: IAppButton) => {
  return (
    <div className="app-link">
      <div className="app-name">
        <span>{name}</span>
      </div>
      <button className={`app-button ${active ? "active" : ""}`}>
        <img src={iconPath} alt={name} className="w-6" />
      </button>
    </div>
  );
};

export default AppButton;
