import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/store/project/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  constructor() {}
  label: string = 'Project';
  @Input() project: Project;

  ngOnInit(): void {}
}
