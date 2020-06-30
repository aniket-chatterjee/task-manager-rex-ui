import { Component, OnInit } from '@angular/core';
import { CreateProjectFormComponent } from 'src/app/components/create-project-form/create-project-form.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectInput } from 'src/app/store/models/project.model';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  constructor() {}

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
