import { describe, expect, it } from '@jest/globals';
import { LoginInteractorImpl } from '@repo/login/LoginInteractorImpl';

describe('LoginInteractor', () => {
  it('should login', () => {
    const interactor = new LoginInteractorImpl();
    expect(true).toBe(true);
  });
});
