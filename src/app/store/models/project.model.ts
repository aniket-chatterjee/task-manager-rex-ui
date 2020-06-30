import { User } from "./user.model";

export interface ProjectResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Project[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  state: string;
  startedOn?: Date;
  endedOn?: Date;
  createdBy: number;
  projectUsers: ProjectUser[];
}

export interface ProjectUser {
  access: string;
  user: User;
}
