import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

export default function Wrapper({ children }) {
  return (
    <div className="container">
      <AppHeader />
      {children}
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node,
};

Wrapper.defaultProps = {
  children: <></>,
};
