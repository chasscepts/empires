import { useEffect, useState } from 'react';
import fetchEmpires from '../api/fetchEmpires';
import AppHeader from './AppHeader';
import EmpireLink from './EmpireLink';
import ErrorPage from './ErrorPage';
import Loader from './Loader';

export default function Home() {
  const [appState, setAppState] = useState({
    loading: true,
    empires: null,
    error: null,
  });

  useEffect(() => {
    fetchEmpires()
      .then((empires) => {
        setAppState({ loading: false, empires });
      })
      .catch((err) => {
        setAppState({ loading: false, error: err.message || 'Api request failed' });
      });
  }, [setAppState]);

  if (appState.error) return <ErrorPage message={appState.error} />;

  if (appState.loading) return <Loader />;

  return (
    <>
      <AppHeader />
      <ul>
        {appState.empires.map(
          (empire, index) => (
            <li key={empire.id}>
              <EmpireLink id={empire.id} name={empire.name} index={index} />
            </li>
          ),
        )}
      </ul>
    </>
  );
}
