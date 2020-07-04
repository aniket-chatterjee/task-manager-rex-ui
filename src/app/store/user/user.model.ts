export interface User {
  id: number;
  firstName: string;
  lastLogin: Date;
  lastName: string;
  username: string;
  email: string;
  avatar?: string;
}
export interface UserDropdownModel {
  label: string;
  value: number;
  color: string;
  payload: User;
}

export interface UserResponse {
  results: User[];
  next?: string;
  previous?: string;
  count: number;
}
export interface UsersState {
  users: User[];
  next?: string;
  previous?: string;
  selectedUser?: UserDropdownModel;
  count: number;
}
