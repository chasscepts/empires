import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../css/EmpireLinks.module.css';
import Wrapper from './Wrapper';

function EmpireLink({ id, name }) {
  return (
    <Link to={`/empire/${id}`}>
      <div className={styles.link}><span>{name}</span></div>
    </Link>
  );
}

EmpireLink.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default function EmpireLinks({ empires }) {
  return (
    <Wrapper>
      <h2 className={styles.heading}>Civilizations</h2>
      <ul className={styles.wrap}>
        {empires.map(
          (empire, index) => (
            <li key={empire.id} className={styles.square}>
              <EmpireLink id={empire.id} name={empire.name} index={index} />
            </li>
          ),
        )}
      </ul>
    </Wrapper>
  );
}

EmpireLinks.propTypes = {
  empires: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      expansion: PropTypes.string.isRequired,
      army_type: PropTypes.string.isRequired,
      unique_unit: PropTypes.arrayOf(PropTypes.string).isRequired,
      unique_tech: PropTypes.arrayOf(PropTypes.string).isRequired,
      team_bonus: PropTypes.string.isRequired,
      civilization_bonus: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};
