import { User } from '../user/user.model';

export interface Task {
  id: number;
  title: string;
  description: string;
  project: number;
  author: User;
  assignee: User;
  estimatedHours: number;
  state: string;
  startedOn?: Date;
  endedOn?: Date;
  taskUsers: TaskUser[];
  parentTask: Task[];
  subTasks: Task[];
  justRelatedTasks: Task[];
  blockedTasks: Task[];
  blockedByTasks: Task[];
}

export class TaskUser {
  access: string;
  user: User;
}
