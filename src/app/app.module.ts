import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { ProjectEffects } from './store/effects/project.effects';
import { TaskEffects } from './store/effects/task.effects';
import { reducer as UserReducer } from './store/reducers/user.reducer';

import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';

import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { CreateProjectFormComponent } from './components/create-project-form/create-project-form.component';
import { CreateTaskFormComponent } from './components/create-task-form/create-task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    UserListComponent,
    UserDetailsComponent,
    TaskListComponent,
    TaskDetailsComponent,
    ProjectCardComponent,
    TaskCardComponent,
    UserCardComponent,
    CreateUserFormComponent,
    CreateProjectFormComponent,
    CreateTaskFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToolbarModule,
    CardModule,
    ButtonModule,
    SplitButtonModule,
    SidebarModule,
    EditorModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    MenuModule,
    TableModule,
    FileUploadModule,

    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ usersState: UserReducer }, {}),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([UserEffects, ProjectEffects, TaskEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
