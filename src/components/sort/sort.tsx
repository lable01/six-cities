import clsx from 'clsx';
import { SORT_OPTIONS } from './const';
import useBoolean from 'hooks/use-boolean';
import { useEffect } from 'react';

type SortProps = {
  current: number;
  setter: (option: number) => void;
};

function Sort({ current, setter }: SortProps) {
  const { isOn, off, toggle } = useBoolean(false);

  useEffect(() => {
    if (isOn) {
      const onEscKeyDown = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
          evt.preventDefault();
          off();
        }
      };

      document.addEventListener('keydown', onEscKeyDown);

      return () => {
        document.removeEventListener('keydown', onEscKeyDown);
      };
    }
  }, [isOn, off]);

  const selectedFilter = SORT_OPTIONS[current];

  return (
    <form className="places__sorting" action="#" method="get" onClick={toggle}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {selectedFilter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul
        className={clsx('places__options places__options--custom', {
          'places__options--opened': isOn,
        })}
      >
        {SORT_OPTIONS.map((filter, index) => (
          <li
            key={filter}
            className={clsx('places__option ', {
              'places__option--active': selectedFilter === filter,
            })}
            onClick={() => setter(index)}
            tabIndex={0}
          >
            {filter}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
