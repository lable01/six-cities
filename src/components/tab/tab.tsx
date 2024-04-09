import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { setCity } from 'store/reducer.ts';
import { TCityName } from 'types/city-name.ts';

type TabProps = {
  city: TCityName;
};

function Tab({ city }: TabProps) {
  const currentCity = useAppSelector((state) => state.city);

  const dispatch = useAppDispatch();
  const isActiveTab =
    currentCity === city ? 'tabs__item--active' : 'tabs__item';

  return (
    <li
      onClick={(evt) => {
        evt.preventDefault();
        dispatch(setCity(city));
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
