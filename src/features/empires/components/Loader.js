import AppHeader from './AppHeader';

const styles = {
  h1: {
    textAlign: 'center',
    marginTop: '40px',
  },
};

export default function Loader() {
  return (
    <>
      <AppHeader />
      <h1 style={styles.h1}>Loading ... </h1>
    </>
  );
}
