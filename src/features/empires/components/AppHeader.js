import { Link } from 'react-router-dom';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    backgroundColor: '#5586e2',
    padding: '20px',
  },
  homeLink: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
};

export default function AppHeader() {
  return (
    <header style={styles.header}>
      <h1>Age Of Empires</h1>
      <nav>
        <Link to="/" style={styles.homeLink}>&#127968;</Link>
      </nav>
    </header>
  );
}
