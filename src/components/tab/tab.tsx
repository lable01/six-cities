type TabProps = {
  city: string;
  onCityClick?: (city: string | null) => void;
};

function Tab({ city, onCityClick }: TabProps) {
  function handleClick() {
    onCityClick?.(city);
  }

  return (
    <li onClick={handleClick} className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

export default Tab;
