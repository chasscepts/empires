import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

const styles = {
  h1: {
    textAlign: 'center',
    marginTop: '40px',
  },
};

export default function ErrorPage({ message }) {
  return (
    <>
      <AppHeader />
      <h1 style={styles.h1}>{message}</h1>
    </>
  );
}

ErrorPage.propTypes = {
  message: PropTypes.string,
};

ErrorPage.defaultProps = {
  message: 'An Error occurred while loading page!',
};
