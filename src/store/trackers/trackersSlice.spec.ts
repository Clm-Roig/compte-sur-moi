import SliceStatus from '../../models/SliceStatus';
import trackersReducer from './trackersSlice';

describe('counter reducer', () => {
  it('should handle initial state', () => {
    expect(trackersReducer(undefined, { type: 'unknown' })).toEqual({
      error: {},
      status: SliceStatus.idle,
      trackers: undefined
    });
  });
});
