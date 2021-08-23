import { useDispatch, useSelector } from 'react-redux';
import {
  loadAllAsync, loadStatuses, selectAll, selectLoadError, selectStatus,
} from '../empiresSlice';
import Wrapper from './Wrapper';
import Loader from './Loader';
import ErrorPage from './ErrorPage';
import EmpireLink from './EmpireLink';

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
      <ul>
        {empires.map(
          (empire, index) => (
            <li key={empire.id}>
              <EmpireLink id={empire.id} name={empire.name} index={index} />
            </li>
          ),
        )}
      </ul>
    </Wrapper>
  );
}
