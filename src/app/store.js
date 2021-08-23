import { configureStore } from '@reduxjs/toolkit';
import empiresReducer from '../features/empires/empiresSlice';

export default configureStore({
  reducer: {
    empires: empiresReducer,
  },
});
