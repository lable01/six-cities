import clsx from 'clsx';
import { SORT_OPTIONS } from './const';
import useBoolean from 'hooks/use-boolean';
import { useEffect } from 'react';
import { useAppDispatch } from 'hooks/store';
import { offersAction } from 'store/slices/offers.ts';

type SortProps = {
  current: number;
};

function Sort({ current }: SortProps) {
  const { isOn, off, toggle } = useBoolean(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
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
  }, [off]);

  const selectedFilter = SORT_OPTIONS[current];

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" onClick={toggle} tabIndex={0}>
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
            onClick={() => {
              dispatch(offersAction.setSort(index));
              off();
            }}
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
