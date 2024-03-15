import MainLayout from 'layouts/main-layout';
import Header from 'components/header';
import Footer from 'components/footer';
import { AppRoute, ClassName } from '../../const';
import { Link } from 'react-router-dom';
import { TListItemProps } from 'components/main-full/main-full';
import { Helmet } from 'react-helmet-async';

function FavoritesPage({ offers }: TListItemProps) {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const favoriteOffersParis = favoriteOffers.filter(
    (offer) => offer.city.name === 'Paris',
  );

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
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Paris</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoriteOffersParis.map((offer) => (
                      <article
                        key={offer.id}
                        className="favorites__card place-card"
                      >
                        {offer.isPremium && (
                          <div className="place-card__mark">
                            <span>Premium</span>
                          </div>
                        )}
                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <Link to={`${AppRoute.Offer}/${offer.id}`}>
                            <img
                              className="place-card__image"
                              src={offer.previewImage}
                              width="150"
                              height="110"
                              alt="Place image"
                            />
                          </Link>
                        </div>
                        <div className="favorites__card-info place-card__info">
                          <div className="place-card__price-wrapper">
                            <div className="place-card__price">
                              <b className="place-card__price-value">
                                &euro;{offer.price}
                              </b>
                              <span className="place-card__price-text">
                                &#47;&nbsp;night
                              </span>
                            </div>
                            <button
                              className="place-card__bookmark-button place-card__bookmark-button--active button"
                              type="button"
                            >
                              <svg
                                className="place-card__bookmark-icon"
                                width="18"
                                height="19"
                              >
                                <use xlinkHref="#icon-bookmark"></use>
                              </svg>
                              <span className="visually-hidden">
                                In bookmarks
                              </span>
                            </button>
                          </div>
                          <div className="place-card__rating rating">
                            <div className="place-card__stars rating__stars">
                              <span style={{ width: '100%' }}></span>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <h2 className="place-card__name">
                            <Link to={`${AppRoute.Offer}/${offer.id}`}>
                              {offer.title}
                            </Link>
                          </h2>
                          <p className="place-card__type">{offer.type}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </main>
      </MainLayout>
      <Footer />
    </>
  );
}

export default FavoritesPage;
