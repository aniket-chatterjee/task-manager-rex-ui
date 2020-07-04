import { Action, createReducer, on } from '@ngrx/store';
import * as ProjectActions from './project.actions';
import { ProjectState } from './project.model';

export const projectFeatureKey = 'project';

export const initialState: ProjectState = {
  projects: [],
  next: null,
  previous: null,
  selectedProject: null,
  count: 0,
};

export const reducer = createReducer(
  initialState,

  on(ProjectActions.loadProjects, (state) => state),
  on(ProjectActions.loadProjectsSuccess, (state, action) => {
    return {
      ...state,
      count: action.count,
      next: action.next,
      previous: action.previous,
      projects: action.results,
    };
  }),
  on(ProjectActions.loadProjectsFailure, (state, action) => state)
);
