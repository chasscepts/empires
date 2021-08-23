import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function EmpireLink({ id, name }) {
  return (
    <Link to={`/empire/${id}`}>
      <div className="empire-link"><span>{name}</span></div>
    </Link>
  );
}

EmpireLink.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
