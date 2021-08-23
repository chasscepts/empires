import { createSlice } from '@reduxjs/toolkit';
import empires from '../../api/empires';

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
    loadAll: (state) => {
      if (state.status === loadStatuses.PRISTINE) {
        state.civilizations = empires.civilizations;
        state.status = loadStatuses.SUCCESS;
        state.loadError = null;
      }
    },
    loadPage: (state, action) => {
      if (state.status === loadStatuses.FAILED) {
        state.pageError = 'Unable to load empires from external API. Please refresh your browser to reload.';
        return;
      }
      if (state.status === loadStatuses.PRISTINE) {
        state.civilizations = empires.civilizations;
        state.status = loadStatuses.SUCCESS;
      }
      const page = state.civilizations.find((empire) => `${empire.id}` === action.payload);
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

// Action creators are generated for each case reducer function
export const { loadAll, loadPage } = empiresSlice.actions;

export const selectAll = (state) => state.empires.civilizations;

export const selectEmpire = (state) => state.empires.selectedCivilization;

export const selectStatus = (state) => state.empires.status;

export const selectLoadError = (state) => state.empires.loadError;

export const selectPageError = (state) => state.empires.pageError;

export default empiresSlice.reducer;
