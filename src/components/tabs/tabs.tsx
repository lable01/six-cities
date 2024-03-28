import { CitiesNames } from '../../const';
import Tab from 'components/tab';

type TabsProps = {
  handleCityClick: (city: string) => void;
  currentCity: string;
};

function Tabs({ handleCityClick, currentCity }: TabsProps) {
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
          {cities.map((city) => (
            <Tab
              city={city}
              key={city}
              onCityClick={handleCityClick}
              currentCity={currentCity}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
