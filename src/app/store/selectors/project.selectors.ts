import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProject from '../reducers/project.reducer';

export const selectProjectState = createFeatureSelector<fromProject.State>(
  fromProject.projectFeatureKey
);
