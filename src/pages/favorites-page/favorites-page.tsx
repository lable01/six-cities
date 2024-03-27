import MainLayout from 'layouts/main-layout';
import Header from 'components/header';
import Footer from 'components/footer';
import { ClassName } from '../../const';
import { Helmet } from 'react-helmet-async';
import FavoritesBlock from 'components/favorite-page-component/favorites-block';
import { TListItems } from 'types/list-items.ts';

function FavoritesPage({ offers }: TListItems) {
  return (
    <>
      <MainLayout header={<Header />} className={ClassName.Favorites}>
        <Helmet>
          <title>
            Favorite page six cities service for travelers - official website
          </title>
        </Helmet>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <FavoritesBlock offers={offers} />
          </div>
        </main>
      </MainLayout>
      <Footer />
    </>
  );
}

export default FavoritesPage;
