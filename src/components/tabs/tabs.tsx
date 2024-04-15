import { CITIES } from '../../const';
import Tab from 'components/tab';
import { useAppSelector } from 'hooks/store';

function Tabs() {
  const currentCity = useAppSelector((state) => state.city);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <Tab city={city} currentCity={currentCity} key={city} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
