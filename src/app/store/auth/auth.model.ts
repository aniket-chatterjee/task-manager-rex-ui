// May be will something extra to it
export interface Profile {
  id: number;
  firstName: string;
  lastLogin: Date;
  lastName: string;
  username: string;
  email: string;
  avatar?: string;
}
export class LoginInput {
  username: string;
  password: string;
}

export class SignupInput {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

export interface AuthResponse {
  refreshToken: string;
  accessToken: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  accessToken: string;
  refreshToken: string;
  error: string | null;
}
