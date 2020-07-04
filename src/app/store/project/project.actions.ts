import { createAction, props } from '@ngrx/store';
import {
  ProjectInput,
  Project,
  ProjectState,
  ProjectResponse,
} from './project.model';

export const loadProjects = createAction('[Project] Load Projects');

export const loadProjectsSuccess = createAction(
  '[Project] Load Projects Success',
  props<ProjectResponse>()
);

export const loadProjectsFailure = createAction(
  '[Project] Load Projects Failure',
  props<{ error: any }>()
);

export const createProject = createAction(
  '[Project] Create Project',
  props<{ data: ProjectInput }>()
);

export const createProjectSuccess = createAction(
  '[Project] Create Project Success',
  props<{ data: Project }>()
);
export const createProjectFailure = createAction(
  '[Project] Create Project Failure',
  props<{ error: any }>()
);
