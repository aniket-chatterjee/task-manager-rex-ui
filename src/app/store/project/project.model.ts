import { User } from '../user/user.model';
import { State } from '../task/task.reducer';

export interface ProjectResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Project[];
}
export class ProjectInput {
  title: string;
  avatar: File;
  description: string;
}
export interface Project {
  id: number;
  title: string;
  description: string;
  state: string;
  startedOn?: Date;
  endedOn?: Date;
  avatar?: string;
  createdBy: number;
  projectUsers: ProjectUser[];
}

export interface ProjectUser {
  access: string;
  user: User;
}

export interface ProjectState {
  projects: Project[];
  next?: string;
  previous?: string;
  selectedProject?: Project;
  count: number;
}
