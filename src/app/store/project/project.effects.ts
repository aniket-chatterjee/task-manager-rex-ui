import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as ProjectActions from './project.actions';
import { ProjectService } from './project.service';

@Injectable()
export class ProjectEffects {
  loadProjects$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectActions.loadProjects),
      concatMap(() =>
        this.projectService.getProjects().pipe(
          map((data) => ProjectActions.loadProjectsSuccess(data)),
          catchError((error) =>
            of(ProjectActions.loadProjectsFailure({ error }))
          )
        )
      )
    );
  });

  createProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectActions.createProject),
      concatMap((action) =>
        this.projectService.createProject(action.data).pipe(
          map((data) => ProjectActions.createProjectSuccess({ data })),
          catchError((error) =>
            of(ProjectActions.createProjectFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {}
}
