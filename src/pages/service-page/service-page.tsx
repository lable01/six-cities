import styles from './styles.module.scss';
import { Helmet } from 'react-helmet-async';
import { ServicePageType } from '../../const.ts';
import { memo } from 'react';

type TServicePageProps = {
  type: ServicePageType;
};

function ServicePage({ type }: TServicePageProps) {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>
          Service page six cities service for travelers - official website
        </title>
      </Helmet>
      <h2 className={styles.title}>{type}</h2>
    </div>
  );
}

export default memo(ServicePage);
