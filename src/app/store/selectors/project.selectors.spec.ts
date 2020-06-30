import * as fromProject from '../reducers/project.reducer';
import { selectProjectState } from './project.selectors';

describe('Project Selectors', () => {
  it('should select the feature state', () => {
    const result = selectProjectState({
      [fromProject.projectFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
