import User from "../models/User";

export interface AuthResponse {
  auth: {
    type: string;
    token: string;
  };
  user: User;
}
