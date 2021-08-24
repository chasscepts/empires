import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectEmpire, selectStatus, selectLoadError, selectPageError, loadStatuses, loadPageAsync,
} from '../empiresSlice';
import Wrapper from './Wrapper';
import Loader from './Loader';
import ErrorPage from './ErrorPage';
import EmpireDetails from './EmpireDetails';

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

  return <EmpireDetails empire={empire} />;
}
