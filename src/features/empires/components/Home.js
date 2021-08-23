import { useDispatch, useSelector } from 'react-redux';
import {
  loadAllAsync, loadStatuses, selectAll, selectLoadError, selectStatus,
} from '../empiresSlice';
import Wrapper from './Wrapper';
import Loader from './Loader';
import ErrorPage from './ErrorPage';
import EmpireLink from './EmpireLink';

const styles = {
  heading: {
    margin: 0,
    padding: '10px',
    fontSize: '1.1rem',
    textTransformation: 'uppercase',
    backgroundColor: '#35548b',
    color: '#fff',
  },
};

export default function Home() {
  const empires = useSelector(selectAll);
  const status = useSelector(selectStatus);
  const loadError = useSelector(selectLoadError);
  const dispatch = useDispatch();

  dispatch(loadAllAsync());

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

  return (
    <Wrapper>
      <h2 style={styles.heading}>Civilizations</h2>
      <ul className="links-wrap">
        {empires.map(
          (empire, index) => (
            <li key={empire.id} className="square">
              <EmpireLink id={empire.id} name={empire.name} index={index} />
            </li>
          ),
        )}
      </ul>
    </Wrapper>
  );
}
