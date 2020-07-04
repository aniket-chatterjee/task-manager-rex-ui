import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectInput } from 'src/app/store/project/project.model';
import { Store } from '@ngrx/store';
import * as Actions from 'src/app/store/project/project.actions';

@Component({
  selector: 'app-create-project-form',
  templateUrl: './create-project-form.component.html',
  styleUrls: ['./create-project-form.component.scss'],
})
export class CreateProjectFormComponent implements OnInit {
  projectForm: FormGroup;
  inputModel: ProjectInput;

  constructor(private store: Store<{ projectState }>) {}

  @Input() showAddForm: boolean;
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();
  description: string;

  onProjectFormHide() {
    this.change.emit(false);
  }

  createProject() {
    this.inputModel = { ...this.projectForm.getRawValue() };
    this.store.dispatch(Actions.createProject({ data: this.inputModel }));
  }
  handleAvatarUpload(event) {
    const files = event.currentFiles;
    this.projectForm.patchValue({ avatar: files[0] });
  }
  ngOnInit(): void {
    this.inputModel = new ProjectInput();
    this.projectForm = new FormGroup({
      title: new FormControl(this.inputModel.title, [
        Validators.required,
        Validators.minLength(4),
      ]),
      description: new FormControl(this.inputModel.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
      avatar: new FormControl(this.inputModel.avatar, []),
    });
  }
}
