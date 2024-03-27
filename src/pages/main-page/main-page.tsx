import MainFull from 'components/main-full';
import MainEmpty from 'components/main-empty';
import MainLayout from 'layouts/main-layout';
import Header from 'components/header';
import Tabs from 'components/tabs';
import { ClassName } from '../../const';
import { TOfferItem } from 'types/offer-item';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

type TMainPageProps = {
  offers: TOfferItem[];
};

function MainPage({ offers }: TMainPageProps) {
  const [сurrentCity, setCurrentCity] = useState<string | null>(null);

  function handleCityClick(currentCity: string | null) {
    setCurrentCity(currentCity);
  }

  return (
    <MainLayout header={<Header />} className={ClassName.Main}>
      <Helmet>
        <title>Six cities service for travelers - official website</title>
      </Helmet>
      <main
        className={
          offers
            ? 'page__main page__main--index'
            : 'page__main page__main--index page__main--index-empty'
        }
      >
        <h1 className="visually-hidden">Cities</h1>
        <Tabs handleCityClick={handleCityClick} />
        <div className="cities">
          {offers ? (
            <MainFull сurrentCity={сurrentCity} offers={offers} />
          ) : (
            <MainEmpty />
          )}
        </div>
      </main>
    </MainLayout>
  );
}

export default MainPage;
