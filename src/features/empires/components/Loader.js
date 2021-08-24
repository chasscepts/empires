import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.wrap}>
      <div className={styles.ldsRipple}>
        <div />
        <div />
      </div>
    </div>
  );
}
