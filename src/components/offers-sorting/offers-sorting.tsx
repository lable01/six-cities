import { useState } from 'react';
import clsx from 'clsx';
import { OffersFilters } from '../../const';

function OffersSorting() {
  const [openSort, setOpenSort] = useState(false);
  const className = openSort
    ? 'places__options--opened'
    : 'places__options--closed';

  const offersFilters = Object.values(OffersFilters);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        onClick={() => setOpenSort(!openSort)}
      >
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={clsx('places__options places__options--custom', className)}
      >
        {offersFilters.map((filter, index) => (
          <li key={index} className="places__option places__option--active">
            {filter}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default OffersSorting;
