import { createSlice } from '@reduxjs/toolkit';
import fetchEmpires from '../../api/fetchEmpires';
import normalizeError from '../../helpers/normalizeError';

export const STATUSES = {
  PRISTINE: 'pristine',
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILED: 'failed',
};

/* eslint-disable no-param-reassign */
const empiresSlice = createSlice({
  name: 'empires',
  initialState: {
    status: STATUSES.PRISTINE,
    loadError: null,
    civilizations: null,
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    load: (state, action) => {
      const { error, civilizations } = action.payload;
      if (error) {
        state.loadError = error;
        state.status = STATUSES.FAILED;
        state.civilizations = null;
      } else {
        state.loadError = null;
        state.status = STATUSES.SUCCESS;
        state.civilizations = civilizations;
      }
    },
  },
});
/* eslint-enable no-param-reassign */

export const { setStatus, load } = empiresSlice.actions;

export const loadAsync = () => (dispatch, getState) => {
  const state = getState();
  if (state.empires.status === STATUSES.PRISTINE) {
    dispatch(setStatus(STATUSES.LOADING));
    fetchEmpires()
      .then((civilizations) => {
        dispatch(load({ civilizations }));
      })
      .catch((err) => {
        dispatch(load({ error: normalizeError(err) }));
      });
  }
};

export const selectAll = (state) => state.empires.civilizations;

export const selectStatus = (state) => state.empires.status;

export const selectLoadError = (state) => state.empires.loadError;

export default empiresSlice.reducer;
