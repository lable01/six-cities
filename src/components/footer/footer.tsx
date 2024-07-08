import Logo from 'components/logo';
import { memo } from 'react';

function Footer() {
  return (
    <footer className="footer container">
      <Logo type="footer" />
    </footer>
  );
}

export default memo(Footer);
