import MainFull from 'components/main-full';
import MainEmpty from 'components/main-empty';
import MainLayout from 'layouts/main-layout';
import Header from 'components/header';
import Tabs from 'components/tabs';
import { ClassName } from '../../const';
import { TOfferItemType } from 'types/offer-item';

type TMainPageProps = {
  offers: TOfferItemType[];
};

function MainPage({ offers }: TMainPageProps) {
  return (
    <MainLayout header={<Header />} className={ClassName.Main}>
      <main
        className={
          offers
            ? 'page__main page__main--index'
            : 'page__main page__main--index page__main--index-empty'
        }
      >
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          {offers ? <MainFull offers={offers} /> : <MainEmpty />}
        </div>
      </main>
    </MainLayout>
  );
}

export default MainPage;
