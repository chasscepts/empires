import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectStatus, selectAll, selectLoadError, loadAsync, STATUSES,
} from '../empiresSlice';
import Wrapper from './Wrapper';
import Loader from './Loader';
import ErrorPage from './ErrorPage';
import EmpireDetails from './EmpireDetails';

export default function Details() {
  const { id } = useParams();
  const empires = useSelector(selectAll);
  const status = useSelector(selectStatus);
  const loadError = useSelector(selectLoadError);
  const dispatch = useDispatch();

  dispatch(loadAsync());

  if (status === STATUSES.LOADING || status === STATUSES.PRISTINE) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  if (status === STATUSES.FAILED) {
    return (
      <Wrapper>
        <ErrorPage message={loadError} />
      </Wrapper>
    );
  }

  const empire = empires.filter((emp) => `${emp.id}` === id)[0];

  if (!empire) {
    return (
      <Wrapper>
        <ErrorPage message="Empire with given id could not be found in the database!" />
      </Wrapper>
    );
  }

  return <EmpireDetails empire={empire} />;
}
