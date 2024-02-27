import { ReactNode } from 'react';
import clsx from 'clsx';

type TMainLayoutProps = {
  children: ReactNode;
  header: ReactNode;
  className: string;
};

function MainLayout({ children, header, className }: TMainLayoutProps) {
  return (
    <div className={clsx('page', className)}>
      {header}
      {children}
    </div>
  );
}

export default MainLayout;
