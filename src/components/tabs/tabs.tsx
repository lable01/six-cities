import { CITIES } from 'const/const.ts';
import Tab from 'components/tab';
import { useAppSelector } from 'hooks/store';
import { offersSelectors } from 'store/slices/offers';
import { memo } from 'react';

function Tabs() {
  const currentCity = useAppSelector(offersSelectors.city);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <Tab city={city} currentCity={currentCity} key={city} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default memo(Tabs);
