import { useState } from 'react';
import clsx from 'clsx';

function OffersSorting() {
  const [sort, setSort] = useState(false);
  const className = sort
    ? 'places__options--opened'
    : 'places__options--closed';

  const OffersFilters = [
    'Popular',
    'Price: low to high',
    'Price: high to low',
    'Top rated first',
  ];

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" onClick={() => setSort(!sort)}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={clsx('places__options places__options--custom', className)}
      >
        {OffersFilters.map((filter, index) => (
          <li key={index} className="places__option places__option--active">
            {filter}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default OffersSorting;
