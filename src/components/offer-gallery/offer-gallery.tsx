type TOfferGalleryProps = {
  images: string[];
  type: string;
};

function OfferGallery({ images, type }: TOfferGalleryProps) {
  return (
    <div className="offer__gallery">
      {images.slice(0, 6).map((image) => (
        <div key={image} className="offer__image-wrapper">
          <img className="offer__image" src={image} alt={`Photo ${type}`} />
        </div>
      ))}
    </div>
  );
}

export default OfferGallery;
