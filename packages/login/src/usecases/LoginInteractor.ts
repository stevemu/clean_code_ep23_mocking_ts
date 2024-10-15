import { LoginRequest } from './LoginRequest';

export interface LoginInteractor {
  login(request: LoginRequest): void;
}
