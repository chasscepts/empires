import reducer, { loadStatuses, loadAll, loadPage } from '../empiresSlice';
import sample from '../components/test_helpers/sampleEmpires';

const civilizations = sample.civilizations;

describe('empireSlice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toStrictEqual({
      status: loadStatuses.PRISTINE,
      loadError: null,
      pageError: null,
      civilizations: null,
      selectedCivilization: null,
    });
  });

  it('should load all empires', () => {
    const prevState = {
      status: loadStatuses.PRISTINE,
      loadError: null,
      pageError: null,
      civilizations: null,
      selectedCivilization: null,
    };

    expect((reducer(prevState, loadAll(civilizations)))).toStrictEqual({
      status: loadStatuses.SUCCESS,
      loadError: null,
      pageError: null,
      civilizations,
      selectedCivilization: null,
    });
  });
});

it('should load an empire given the id', () => {
  const prevState = {
    status: loadStatuses.SUCCESS,
    loadError: null,
    pageError: null,
    civilizations,
    selectedCivilization: null,
  };

  expect(reducer(prevState, loadPage({ id: `${civilizations[0].id}` }))).toStrictEqual({
    status: loadStatuses.SUCCESS,
    loadError: null,
    pageError: null,
    civilizations,
    selectedCivilization: civilizations[0],
  });
});

it('should set page error when empire id is not found', () => {
  const prevState = {
    status: loadStatuses.SUCCESS,
    loadError: null,
    pageError: null,
    civilizations,
    selectedCivilization: null,
  };

  expect(reducer(prevState, loadPage({ id: `1000` }))).toStrictEqual({
    status: loadStatuses.SUCCESS,
    loadError: null,
    pageError: 'Empire with given id could not be found in the database!',
    civilizations,
    selectedCivilization: null,
  });
});
