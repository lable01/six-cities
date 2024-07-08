import { AppRoute, SizesLogo } from '../../const.ts';
import { Link } from 'react-router-dom';
import { memo } from 'react';

type LogoProps = {
  type: 'header' | 'footer';
};

function Logo({ type }: LogoProps) {
  const size = SizesLogo[type];
  const logoImage = 'img/logo.svg';
  return (
    <Link to={AppRoute.Main} className={`${type}__logo-link`}>
      <img
        className={`${type}__logo`}
        src={logoImage}
        alt="6 cities logo"
        width={size.width}
        height={size.height}
      />
    </Link>
  );
}

export default memo(Logo);
