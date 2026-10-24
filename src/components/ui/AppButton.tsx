export interface IAppButton {
  name: string;
  iconPath: string;
  active?: boolean;
}

const AppButton = ({ name, iconPath, active }: IAppButton) => {
  return (
    <div className={`app-button ${active ? "active" : ""}`}>
      <img src={iconPath} alt={name} className="w-6" />
    </div>
  );
};

export default AppButton;
