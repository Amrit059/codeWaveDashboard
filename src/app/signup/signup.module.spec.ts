import { SignupModule } from './signup.module';

describe('LoginModule', () => {
  let signupModule: SignupModule;

  beforeEach(() => {
    signupModule = new SignupModule();
  });

  it('should create an instance', () => {
    expect(signupModule).toBeTruthy();
  });
});
