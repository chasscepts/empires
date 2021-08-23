import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchEmpires from '../api/fetchEmpires';
import AppHeader from './AppHeader';

export default function Details() {
  const [empire, setEmpire] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchEmpires()
      .then((empires) => {
        for (let i = 0, n = empires.length; i < n; i += 1) {
          if (`${empires[i].id}` === id) {
            setEmpire(empires[i]);
            break;
          }
        }
      });
  }, [setEmpire]);

  if (!empire) {
    return (
      <>
        <AppHeader />
        <h1 style={{ textAlign: 'center' }}>Searching for Empire</h1>
      </>
    );
  }

  return (
    <>
      <AppHeader />
      <p style={{ textAlign: 'center' }}>{JSON.stringify(empire, null, 2)}</p>
    </>
  );
}
