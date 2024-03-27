import clsx from 'clsx';
import { TOfferItem } from 'types/offer-item.ts';
import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from 'hooks/use-map';
import { URL_MARKER_ACTIVE, URL_MARKER_DEFAULT } from '../../const.ts';

type MapProps = {
  offers: TOfferItem[];
  cardHover?: string | null;
  className: string;
  сurrentCity: string | null;
};

const defaultMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const activeMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ offers, cardHover, className, сurrentCity }: MapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useMap({
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
    containerRef: mapContainerRef,
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon:
                offer.id === cardHover ? activeMarkerIcon : defaultMarkerIcon,
            },
          )
          .addTo(map);
      });
    }
  }, [cardHover, map, offers]);

  return (
    <section className={clsx('map', className)} ref={mapContainerRef}></section>
  );
}

export default Map;
