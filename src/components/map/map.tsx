import clsx from 'clsx';

type MapProps = {
  className: string;
};

function Map({ className }: MapProps) {
  return <section className={clsx('map', className)}></section>;
}

export default Map;
