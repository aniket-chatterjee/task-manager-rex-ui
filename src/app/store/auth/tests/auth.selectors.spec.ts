import * as fromUser from '../auth.reducer';
import { selectUserState } from '../auth.selectors';

describe('User Selectors', () => {
  it('should select the feature state', () => {
    const result = selectUserState({
      [fromUser.userFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
