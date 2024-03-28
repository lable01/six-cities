import clsx from 'clsx';

type TabProps = {
  city: string;
  onCityClick: (city: string) => void;
  currentCity: string;
};

function Tab({ city, onCityClick, currentCity }: TabProps) {
  function handleClick() {
    onCityClick(city);
  }

  const isActiveTab =
    currentCity === city ? 'tabs__item--active' : 'tabs__item';

  return (
    <li onClick={handleClick} className="locations__item">
      <a className={clsx('locations__item-link', isActiveTab)} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

export default Tab;
