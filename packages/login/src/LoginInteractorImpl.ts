import { LoginInteractor } from './LoginInteractor';
import { LoginRequest } from './LoginRequest';

export class LoginInteractorImpl implements LoginInteractor {
  login(request: LoginRequest): void {
    console.log('login');
  }
}
