import styles from './styles.module.scss';

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <h2 className={styles.title}>К сожалению вы оказались на не существующей странице</h2>
    </div>
  );
}

export default NotFound;
