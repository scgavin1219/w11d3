import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {

  const { themeName } = useTheme()

  const [image, setImage] = useState(dayImage)

  useEffect(() => { 
    if (themeName === 'day') {
      setImage(dayImage)
    } else {
      setImage(nightImage)
    }
  }, [themeName])
  

  return (
  
    <section>
      <img  className='greenhouse-img'
            src={image}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;