export interface User {
  id: string;
  email: string;
  createdAt: string;
  createdAtFormatted: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}
