import { Component, OnInit } from "@angular/core";
import { CreateProjectFormComponent } from "src/app/components/create-project-form/create-project-form.component";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import * as Actions from "src/app/store/project/project.actions";
import {
  ProjectInput,
  Project,
  ProjectState,
} from "src/app/store/project/project.model";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ProjectCardComponent } from "src/app/components/project-card/project-card.component";

@Component({
  selector: "app-project-list",
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.scss"],
})
export class ProjectListComponent implements OnInit {
  pojectCardComponent = ProjectCardComponent;
  projects$: Observable<Project[]> = this.store.select(
    (state) => state.projectState.projects
  );
  constructor(private store: Store<{ projectState: ProjectState }>) {
    this.store.dispatch(Actions.loadProjects());
  }

  createForm = CreateProjectFormComponent;
  showAddForm: boolean = false;
  showAddProjectForm() {
    this.showAddForm = true;
  }
  onFormHide(val: boolean) {
    this.showAddForm = val;
  }
  ngOnInit(): void {}
}
