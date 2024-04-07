import leaflet, { Map as LeafletMap } from 'leaflet';
import React, { useEffect, useRef, useState } from 'react';
import {
  TILE_LAYER_ATTRIBUTION,
  TILE_LAYER_URL_PATTERN,
} from 'components/map/const.ts';
import { TLocation } from 'types/location.ts';

type UseMapProps = {
  location: TLocation;
  containerRef: React.RefObject<HTMLElement | null>;
};

function useMap({ location, containerRef }: UseMapProps) {
  const [map, setMap] = useState<LeafletMap | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (containerRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(containerRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });

      leaflet
        .tileLayer(TILE_LAYER_URL_PATTERN, {
          attribution: TILE_LAYER_ATTRIBUTION,
        })
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [containerRef, location]);

  return map;
}

export default useMap;
