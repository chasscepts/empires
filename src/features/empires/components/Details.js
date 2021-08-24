import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectEmpire, selectStatus, selectLoadError, selectPageError, loadStatuses, loadPageAsync,
} from '../empiresSlice';
import Wrapper from './Wrapper';
import Loader from './Loader';
import ErrorPage from './ErrorPage';

const styles = {
  heading: {
    margin: 0,
    padding: '10px',
    textTransformation: 'uppercase',
    backgroundColor: '#35548b',
    color: '#fff',
  },
  name: {
    display: 'block',
    fontSize: '1.6rem',
  },
  expansion: {
    display: 'block',
    fontSize: '1.2rem',
  },
  lightBg: {
    color: '#fff',
    backgroundColor: '#4268AF',
    padding: '10px 20px',
  },
  darkBg: {
    color: '#fff',
    backgroundColor: '#3e61a3',
    padding: '10px 20px',
  },
  groupHeading: {
    fontWeight: 'bold',
    paddingBottom: '8px',
  },
  link: {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

const linkName = (link) => link.split('/').pop().replace('_', ' ');

export default function Details() {
  const { id } = useParams();
  const empire = useSelector(selectEmpire);
  const status = useSelector(selectStatus);
  const pageError = useSelector(selectPageError);
  const loadError = useSelector(selectLoadError);
  const dispatch = useDispatch();

  dispatch(loadPageAsync(id));

  if (status === loadStatuses.PRISTINE) return <Wrapper />;

  if (status === loadStatuses.LOADING) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  if (status === loadStatuses.FAILED) {
    return (
      <Wrapper>
        <ErrorPage message={loadError} />
      </Wrapper>
    );
  }

  if (pageError) {
    return (
      <Wrapper>
        <ErrorPage message={pageError} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h2 style={styles.heading}>
        <span style={styles.name}>{empire.name}</span>
        <span style={styles.expansion}>{empire.expansion}</span>
      </h2>
      <div style={styles.lightBg}>
        <div style={styles.groupHeading}>Army Type</div>
        <div className="item">{empire.army_type}</div>
      </div>
      <div style={styles.darkBg}>
        <div style={styles.groupHeading}>Team Bonus</div>
        <div className="item">{empire.team_bonus}</div>
      </div>
      <div style={styles.lightBg}>
        <div style={styles.groupHeading}>Civilization Bonus</div>
        <div className="plain">
          {empire.civilization_bonus.map((bonus) => (
            <div className="item" key={bonus}>{bonus}</div>
          ))}
        </div>
      </div>
      <div style={styles.darkBg}>
        <div style={styles.groupHeading}>Unique Unit</div>
        <div className="plain">
          {empire.unique_unit.map((unit) => (
            <div className="item" style={styles.link} key={unit} title="Link disabled">{linkName(unit)}</div>
          ))}
        </div>
      </div>
      <div style={styles.lightBg}>
        <div style={styles.groupHeading}>Unique Technology</div>
        <div className="plain">
          {empire.unique_tech.map((tech) => (
            <div className="item" style={styles.link} key={tech} title="Link disabled">{linkName(tech)}</div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
