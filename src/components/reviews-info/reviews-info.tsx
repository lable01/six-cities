function ReviewsInfo() {
  return (
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{ width: '80%' }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        A quiet cozy and picturesque that hides behind a a river by the unique
        lightness of Amsterdam. The building is green and from 18th century.
      </p>
      <time className="reviews__time" dateTime="2019-04-24">
        April 2019
      </time>
    </div>
  );
}

export default ReviewsInfo;
