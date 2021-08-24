import PropTypes from 'prop-types';
import styles from './EmpireDetails.module.css';
import Wrapper from './Wrapper';

const linkName = (link) => link.split('/').pop().replace('_', ' ');

export default function EmpireDetails({ empire }) {
  return (
    <Wrapper>
      <h2 className={styles.heading}>
        <span className={styles.name}>{empire.name}</span>
        <span className={styles.expansion}>{empire.expansion}</span>
      </h2>
      <div className={styles.lightBg}>
        <div className={styles.groupHeading}>Army Type</div>
        <div className={styles.item}>{empire.army_type}</div>
      </div>
      <div className={styles.darkBg}>
        <div className={styles.groupHeading}>Team Bonus</div>
        <div className={styles.item}>{empire.team_bonus}</div>
      </div>
      <div className={styles.lightBg}>
        <div className={styles.groupHeading}>Civilization Bonus</div>
        <div>
          {empire.civilization_bonus.map((bonus) => (
            <div className={styles.item} key={bonus}>{bonus}</div>
          ))}
        </div>
      </div>
      <div className={styles.darkBg}>
        <div className={styles.groupHeading}>Unique Unit</div>
        <div>
          {empire.unique_unit.map((unit) => (
            <div className={styles.itemLink} key={unit} title="Link disabled">{linkName(unit)}</div>
          ))}
        </div>
      </div>
      <div className={styles.lightBg}>
        <div className={styles.groupHeading}>Unique Technology</div>
        <div>
          {empire.unique_tech.map((tech) => (
            <div className={styles.itemLink} key={tech} title="Link disabled">{linkName(tech)}</div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

EmpireDetails.propTypes = {
  empire: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      expansion: PropTypes.string.isRequired,
      army_type: PropTypes.string.isRequired,
      unique_unit: PropTypes.arrayOf(PropTypes.string).isRequired,
      unique_tech: PropTypes.arrayOf(PropTypes.string).isRequired,
      team_bonus: PropTypes.string.isRequired,
      civilization_bonus: PropTypes.arrayOf(PropTypes.string).isRequired,
    },
  ).isRequired,
};
