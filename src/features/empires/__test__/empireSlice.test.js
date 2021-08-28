import reducer, { STATUSES, load } from '../empiresSlice';
import sample from '../components/test_helpers/sampleEmpires';

const { civilizations } = sample;

describe('empireSlice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toStrictEqual({
      status: STATUSES.PRISTINE,
      loadError: null,
      civilizations: null,
    });
  });

  it('should load all empires', () => {
    const prevState = {
      status: STATUSES.PRISTINE,
      loadError: null,
      civilizations: null,
    };

    expect((reducer(prevState, load({ civilizations })))).toStrictEqual({
      status: STATUSES.SUCCESS,
      loadError: null,
      civilizations,
    });
  });
  
  it('should set error when page failed', () => {
    const error = { message: 'Load Failed!' };

    const prevState = {
      status: STATUSES.PRISTINE,
      loadError: null,
      civilizations: null,
    };

    expect((reducer(prevState, load({ error })))).toStrictEqual({
      status: STATUSES.FAILED,
      loadError: error,
      civilizations: null,
    });
  });
});
