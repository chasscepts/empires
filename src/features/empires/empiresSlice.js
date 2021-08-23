import { createSlice } from '@reduxjs/toolkit';
import fetchEmpires from '../../api/fetchEmpires';
import normalizeError from '../../helpers/normalizeError';

export const loadStatuses = {
  PRISTINE: 'pristine',
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILED: 'failed',
};

/* eslint-disable no-param-reassign */
export const empiresSlice = createSlice({
  name: 'empires',
  initialState: {
    status: loadStatuses.PRISTINE,
    loadError: null,
    pageError: null,
    civilizations: null,
    selectedCivilization: null,
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setLoadError: (state, action) => {
      state.loadError = action.payload;
      state.status = loadStatuses.FAILED;
    },
    loadAll: (state, action) => {
      state.civilizations = action.payload;
      state.loadError = null;
      state.status = loadStatuses.SUCCESS;
    },
    loadPage: (state, action) => {
      if (action.payload.empires) {
        state.civilizations = action.payload.empires;
        state.status = loadStatuses.SUCCESS;
      }
      if (state.status === loadStatuses.LOADING) return;
      if (state.status === loadStatuses.FAILED) {
        state.pageError = 'Unable to load empires from external API. Please refresh your browser to reload.';
        return;
      }
      const page = state.civilizations.find((empire) => `${empire.id}` === action.payload.id);
      if (page) {
        state.selectedCivilization = page;
        state.pageError = null;
      } else {
        state.pageError = 'Empire with given id could not be found in the database!';
      }
    },
  },
});
/* eslint-enable no-param-reassign */

export const {
  setStatus, setLoadError, loadAll, loadPage,
} = empiresSlice.actions;

export const loadAllAsync = () => (dispatch, getState) => {
  const state = getState();
  if (state.empires.status === loadStatuses.PRISTINE) {
    dispatch(setStatus(loadStatuses.LOADING));
    fetchEmpires()
      .then((empires) => {
        dispatch(loadAll(empires));
      })
      .catch((err) => {
        dispatch(setLoadError(normalizeError(err)));
      });
  }
};

export const loadPageAsync = (id) => (dispatch, getState) => {
  const state = getState();
  if (state.empires.status === loadStatuses.PRISTINE) {
    dispatch(setStatus(loadStatuses.LOADING));
    fetchEmpires()
      .then((empires) => {
        dispatch(loadPage({ id, empires }));
      })
      .catch((err) => {
        dispatch(setLoadError(normalizeError(err)));
        dispatch(loadPage({ id }));
      });
  } else {
    dispatch(loadPage({ id }));
  }
};

export const selectAll = (state) => state.empires.civilizations;

export const selectEmpire = (state) => state.empires.selectedCivilization;

export const selectStatus = (state) => state.empires.status;

export const selectLoadError = (state) => state.empires.loadError;

export const selectPageError = (state) => state.empires.pageError;

export default empiresSlice.reducer;
