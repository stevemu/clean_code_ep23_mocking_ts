import { LoginPresenter } from '../../usecases/LoginPresenter';
import { LoginResponse } from '../../usecases/LoginResponse';

export class LoginPresenterSpy implements LoginPresenter {
  private invokedResponse: LoginResponse | null = null;

  presentResponse(response: LoginResponse) {
    this.invokedResponse = response;
  }

  getInvokedResponse(): LoginResponse | null {
    return this.invokedResponse;
  }
}
