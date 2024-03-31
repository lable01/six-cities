import MainFull from 'components/main-full';
import MainEmpty from 'components/main-empty';
import MainLayout from 'layouts/main-layout';
import Header from 'components/header';
import Tabs from 'components/tabs';
import { CitiesNames, ClassName } from '../../const';
import { TOfferItem } from 'types/offer-item';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import clsx from 'clsx';

type TMainPageProps = {
  offers: TOfferItem[];
};

function MainPage({ offers }: TMainPageProps) {
  const [currentCity, setCurrentCity] = useState<string>(CitiesNames.Paris);

  function handleCityClick(selected: string) {
    setCurrentCity(selected);
  }

  const currentOffers = offers.filter(
    (offer) => offer.city.name === currentCity,
  );

  const mainClassName =
    currentOffers.length === 0 ? 'page__main--index-empty' : '';

  return (
    <MainLayout header={<Header />} className={ClassName.Main}>
      <Helmet>
        <title>Six cities service for travelers - official website</title>
      </Helmet>
      <main className={clsx('page__main page__main--index', mainClassName)}>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs handleCityClick={handleCityClick} currentCity={currentCity} />
        <div className="cities">
          {currentOffers.length !== 0 ? (
            <MainFull currentOffers={currentOffers} currentCity={currentCity} />
          ) : (
            <MainEmpty />
          )}
        </div>
      </main>
    </MainLayout>
  );
}

export default MainPage;
