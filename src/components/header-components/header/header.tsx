import Logo from 'components/logo';
import HeaderNav from 'components/header-components/header-nav';
import { memo } from 'react';

type THeaderProps = {
  withNav?: boolean;
};

function Header({ withNav = true }: THeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo type="header" />
          </div>
          {withNav && <HeaderNav />}
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
