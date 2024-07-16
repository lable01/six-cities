import { useMemo } from 'react';
import { TOfferItem } from 'types/offer-item';
import { SortOption } from 'components/sort/const.ts';

function useSortedOffers(offers: TOfferItem[], currentSort: SortOption) {
  return useMemo(() => {
    switch (currentSort) {
      case SortOption.PriceLowToHigh:
        return [...offers].sort((a, b) => a.price - b.price);
      case SortOption.PriceHighToLow:
        return [...offers].sort((a, b) => b.price - a.price);
      case SortOption.TopRatedFirst:
        return [...offers].sort((a, b) => b.rating - a.rating);
      default:
        return offers;
    }
  }, [offers, currentSort]);
}

export default useSortedOffers;
