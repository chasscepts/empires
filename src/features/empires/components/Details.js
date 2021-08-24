import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectEmpire, selectStatus, selectLoadError, selectPageError, loadStatuses, loadPageAsync,
} from '../empiresSlice';
import Wrapper from './Wrapper';
import Loader from './Loader';
import ErrorPage from './ErrorPage';
import styles from './Details.module.css';

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

  if (!empire) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

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
