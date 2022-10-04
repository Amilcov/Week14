import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {
  const { themeName, setThemeName } = useTheme();

  const clickLight = (position)=> {
    if (position === 'day') {
      setThemeName('day');
    } else {
      setThemeName('night');
    };
  }

  return (
    <div className={`light-switch ${themeName}`}>
      <div className={themeName === 'day' ? 'on' : 'off'} onClick={() => clickLight("day")}>DAY</div>
      <div className={themeName === 'night' ? 'on' : 'off'} onClick={() => clickLight("night")}>NIGHT</div>
    </div>
  );
} 

export default LightSwitch;