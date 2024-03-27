import { CitiesNames } from '../../const';
import Tab from 'components/tab';

type TabsProps = {
  handleCityClick?: (city: string | null) => void;
};

function Tabs({ handleCityClick }: TabsProps) {
  const cities = [
    CitiesNames.Paris,
    CitiesNames.Cologne,
    CitiesNames.Brussels,
    CitiesNames.Amsterdam,
    CitiesNames.Hamburg,
    CitiesNames.Dusseldorf,
  ];

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, index) => (
            <Tab city={city} key={index} onCityClick={handleCityClick} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
