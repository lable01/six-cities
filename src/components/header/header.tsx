import Logo from 'components/logo';
import HeaderNav from 'components/header-nav';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo type="header" />
          </div>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
