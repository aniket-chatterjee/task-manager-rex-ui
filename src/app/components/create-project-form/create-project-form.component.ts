import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectInput } from 'src/app/store/models/project.model';

@Component({
  selector: 'app-create-project-form',
  templateUrl: './create-project-form.component.html',
  styleUrls: ['./create-project-form.component.scss'],
})
export class CreateProjectFormComponent implements OnInit {
  projectForm: FormGroup;
  inputModel: ProjectInput;
  constructor() {}
  @Input() showAddForm: boolean;
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();
  description: string;

  onProjectFormHide() {
    this.change.emit(false);
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
    });
  }
}
