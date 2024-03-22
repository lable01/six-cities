import styles from './styles.module.scss';
import { Helmet } from 'react-helmet-async';

function NotFound() {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>
          Page not found six cities service for travelers - official website
        </title>
      </Helmet>
      <h2 className={styles.title}>
        Unfortunately, you ended up on a non-existing page
      </h2>
    </div>
  );
}

export default NotFound;
