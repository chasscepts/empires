import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

export default function Wrapper({ children }) {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node,
};

Wrapper.defaultProps = {
  children: <></>,
};
