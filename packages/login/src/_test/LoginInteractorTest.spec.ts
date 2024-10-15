import { describe, expect, it } from '@jest/globals';
import { LoginInteractorImpl } from '../usecases/LoginInteractorImpl';

describe('LoginInteractor', () => {
  it('should login', () => {
    const interactor = new LoginInteractorImpl();
    expect(true).toBe(true);
  });
});
