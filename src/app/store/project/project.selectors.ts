import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProject from './project.reducer';
import { ProjectState } from './project.model';

export const selectProjectState = createFeatureSelector<ProjectState>(
  fromProject.projectFeatureKey
);
