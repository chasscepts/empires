import { Link } from 'react-router-dom';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

export default function AppHeader() {
  return (
    <header style={styles.header}>
      <h1>Age Of Empires</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}
