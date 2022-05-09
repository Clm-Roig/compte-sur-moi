import { createSlice } from '@reduxjs/toolkit';

import SliceStatus from '../../models/SliceStatus';
import TrackersState from './TrackersState';
import { archiveTrackerReducer, archiveTrackersReducer } from './reducers/archive';
import { cancelLatestEntryReducer } from './reducers/cancelLatestEntry';
import { createTrackerReducer } from './reducers/create';
import { deleteTrackerReducer, deleteTrackersReducer } from './reducers/delete';
import { editTrackerReducer } from './reducers/edit';
import { hideTrackerReducer } from './reducers/hide';
import { markTrackerAsActiveReducer, markTrackersAsActiveReducer } from './reducers/markAsActive';
import { markTrackerAsVisibleReducer } from './reducers/markAsVisible';
import { completelyValidateReducer, customValidateReducer } from './reducers/validate';

// ===== State

const initialState: TrackersState = {
  error: {},
  status: SliceStatus.idle,
  trackers: []
};

// ===== Thunk

// export const fetchAllTrackers = createAsyncThunk('trackers/fetchAllTrackers', async () => {
//   const response = await TrackersActions.fetchAll();
//   return response.data;
// });

// ===== Reducers

export const trackersSlice = createSlice({
  name: 'trackers',
  initialState,
  reducers: {
    archiveTracker: archiveTrackerReducer,
    archiveTrackers: archiveTrackersReducer,
    cancelLatestEntry: cancelLatestEntryReducer,
    completelyValidate: completelyValidateReducer,
    createTracker: createTrackerReducer,
    customValidate: customValidateReducer,
    deleteTracker: deleteTrackerReducer,
    deleteTrackers: deleteTrackersReducer,
    editTracker: editTrackerReducer,
    hideTracker: hideTrackerReducer,
    markTrackersAsActive: markTrackersAsActiveReducer,
    markTrackerAsActive: markTrackerAsActiveReducer,
    markTrackerAsVisible: markTrackerAsVisibleReducer
  }
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  // extraReducers: (builder) => {})
});

export const {
  archiveTracker,
  archiveTrackers,
  cancelLatestEntry,
  createTracker,
  completelyValidate,
  customValidate,
  deleteTracker,
  deleteTrackers,
  editTracker,
  hideTracker,
  markTrackerAsActive,
  markTrackersAsActive,
  markTrackerAsVisible
} = trackersSlice.actions;
export default trackersSlice.reducer;
