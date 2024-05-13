import { useAppSelector } from 'hooks/store';
import { offersSelectors } from 'store/slices/offers.ts';
import StatusMessage from 'components/status-message';

function MainEmpty() {
  const currentCity = useAppSelector(offersSelectors.city);
  const error = useAppSelector(offersSelectors.error);

  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <StatusMessage error={error} currentCity={currentCity} />
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
}

export default MainEmpty;
