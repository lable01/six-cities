import MainFull from 'components/main-full';
import MainEmpty from 'components/main-empty';
import MainLayout from 'layouts/main-layout';
import Header from 'components/header';
import Tabs from 'components/tabs';
import { ClassName } from '../../const';
import { TOfferItemType } from 'types/offer-item';
import clsx from 'clsx';

type TMainPageProps = {
  offers: TOfferItemType[];
};

function MainPage({ offers }: TMainPageProps) {
  const mainClassName = offers ? '' : 'page__main--index-empty';

  return (
    <MainLayout header={<Header />} className={ClassName.Main}>
      <main className={clsx('page__main page__main--index', mainClassName)}>
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
