import clsx from 'clsx';
import { useAppDispatch } from 'hooks/store';
import { TCityName } from 'types/city-name.ts';
import { offersAction } from 'store/slices/offers.ts';

type TabProps = {
  city: TCityName;
  currentCity: TCityName;
};

function Tab({ city, currentCity }: TabProps) {
  const dispatch = useAppDispatch();
  const isActiveTab =
    currentCity === city ? 'tabs__item--active' : 'tabs__item';

  return (
    <li
      onClick={(evt) => {
        evt.preventDefault();
        dispatch(offersAction.setCity(city));
      }}
      className="locations__item"
    >
      <a className={clsx('locations__item-link', isActiveTab)} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

export default Tab;
