import { CitiesNames } from '../../const';
function Tabs() {
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
            <li key={index} className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
