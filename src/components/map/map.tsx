import clsx from 'clsx';
import { TOfferItem } from 'types/offer-item.ts';
import { useEffect, useRef, memo } from 'react';
import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from 'hooks/use-map';
import { URL_MARKER_ACTIVE, URL_MARKER_DEFAULT } from './const.ts';
import { TOfferDetail } from 'types/offer-detail.ts';

type MapProps = {
  offers: (TOfferItem | TOfferDetail)[];
  activeOfferId: string | null;
  className: string;
};

const defaultMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const activeMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

function Map({ offers, activeOfferId, className }: MapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const currentCityLocation = offers[0].city.location;
  const map = useMap({
    location: currentCityLocation,
    containerRef: mapContainerRef,
  });
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect(() => {
    if (map) {
      map.setView(
        [currentCityLocation.latitude, currentCityLocation.longitude],
        currentCityLocation.zoom,
      );
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [currentCityLocation, map]);

  const addMarkers = () => {
    if (map) {
      const markerLayerCurrent = markerLayer.current;
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon:
                offer.id === activeOfferId
                  ? activeMarkerIcon
                  : defaultMarkerIcon,
            },
          )
          .addTo(markerLayerCurrent);
      });
      return () => {
        markerLayerCurrent.clearLayers();
      };
    }
  };

  useEffect(() => {
    addMarkers();
  }, [addMarkers]);

  return (
    <section className={clsx('map', className)} ref={mapContainerRef}></section>
  );
}

export default memo(Map);
