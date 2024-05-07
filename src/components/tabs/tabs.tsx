import { CITIES } from '../../const';
import Tab from 'components/tab';
import { useAppSelector } from 'hooks/store';
import { selectCity } from 'store/selectors/offers';

function Tabs() {
  const currentCity = useAppSelector(selectCity);

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
