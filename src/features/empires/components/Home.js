import { useDispatch, useSelector } from 'react-redux';
import {
  loadAsync, STATUSES, selectAll, selectLoadError, selectStatus,
} from '../empiresSlice';
import Wrapper from './Wrapper';
import Loader from './Loader';
import ErrorPage from './ErrorPage';
import EmpireLinks from './EmpireLinks';

export default function Home() {
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

  return <EmpireLinks empires={empires} />;
}
