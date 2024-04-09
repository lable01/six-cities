import { CITIES } from '../../const';
import Tab from 'components/tab';
function Tabs() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <Tab city={city} key={city} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
