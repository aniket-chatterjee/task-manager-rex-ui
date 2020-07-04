import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectResponse, Project, ProjectInput } from './project.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectUrl = 'http://localhost:8000/projects/';
  private users: Project[];

  getProjects(): Observable<ProjectResponse> {
    return this.http.get<ProjectResponse>(this.projectUrl);
  }

  createProject(data: ProjectInput): Observable<Project> {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('avatar', data.avatar);
    return this.http.post<Project>(this.projectUrl, formData);
  }
  constructor(private http: HttpClient) {}
}
