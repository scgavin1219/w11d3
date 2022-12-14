import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {

  const { themeName, setThemeName } = useTheme();

  const handleOn = (e) => {
    setThemeName("day");
  }

  const handleOff = (e) => {
    setThemeName("night");
  }
  
  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={handleOn}>DAY</div>
      <div className="off" onClick={handleOff}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;