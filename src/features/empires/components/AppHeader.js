import { Link } from 'react-router-dom';
import styles from './AppHeader.module.css';

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <h1>Age Of Empires II</h1>
      <nav>
        <Link to="/" className={styles.link} role="link">&#127968;</Link>
      </nav>
    </header>
  );
}
