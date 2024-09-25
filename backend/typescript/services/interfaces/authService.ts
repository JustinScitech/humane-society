import { AuthDTO, Role, Token} from "../../types";

interface IAuthService {
  /**
   * Generate a short-lived JWT access token and a long-lived refresh token
   * when supplied user's email and password
   * @param email user's email
   * @param password user's password
   * @returns AuthDTO object containing the access token, refresh token, and user info
   * @throws Error if token generation fails
   */
  generateToken(email: string, password: string): Promise<AuthDTO>;

  /**
   * Generate a short-lived JWT access token and a long-lived refresh token
   * when supplied OAuth ID token
   * @param idToken user's ID token
   * @returns AuthDTO object containing the access token, refresh token, and user info
   * @throws Error if token generation fails
   */
  generateTokenOAuth(idToken: string): Promise<AuthDTO>;

  /**
   * Revoke all refresh tokens of a user
   * @param userId userId of user whose refresh tokens are to be revoked
   * @throws Error if token revocation fails
   */
  revokeTokens(userId: string): Promise<void>;

  /**
   * Generate new access and refresh token pair using the provided refresh token
   * @param refreshToken refresh token
   * @returns Token object containing new access and refresh tokens
   * @throws Error if token renewal fails
   */
  renewToken(refreshToken: string): Promise<Token>;

  /**
   * Generate a password reset link for the user with the given email and send
   * the link to that email address
   * @param email email of user requesting password reset
   * @throws Error if unable to generate link or send email
   */
  resetPassword(email: string): Promise<void>;

  /**
   * Generate an email verification link for the user with the given email and send
   * the link to that email address
   * @param email email of user that needs to be verified
   * @throws Error if unable to generate link or send email
   */
  sendEmailVerificationLink(email: string): Promise<void>;

  /**
   * Determine if the provided access token is valid and authorized for at least
   * one of the specified roles
   * @param accessToken user's access token
   * @param roles roles to check for
   * @returns true if token valid and authorized, false otherwise
   */
  isAuthorizedByRole(accessToken: string, roles: Set<Role>): Promise<boolean>;

  /**
   * Determine if the provided access token is valid and issued to the requested user
   * @param accessToken user's access token
   * @param requestedUserId userId of requested user
   * @returns true if token valid and authorized, false otherwise
   */
  isAuthorizedByUserId(
    accessToken: string,
    requestedUserId: string,
  ): Promise<boolean>;

  /**
   * Determine if the provided access token is valid and issued to the requested user
   * with the specified email address
   * @param accessToken user's access token
   * @param requestedEmail email address of requested user
   * @returns true if token valid and authorized, false otherwise
   */
  isAuthorizedByEmail(
    accessToken: string,
    requestedEmail: string,
  ): Promise<boolean>;

  /**
   * Check if oobCode is valid.
   * @param oob code from password reset URL
   * @returns email as a string if the oobCode is valid
   */
  verifyPasswordResetCode(
    oobCode: string
  ): Promise<string>

  /**
   * Reset password.
   * @param oobCode from apssword reset URL
   * @param new password
   * @returns true if password was reset successfully
   */
  confirmPasswordReset(
    oobCode: string,
    newPassword: string
  ): Promise<boolean>

  /**
   * Full password reset flow (verify code + change password)
   * For FIRST TIME password change.
   * @param oobCode from apssword reset URL
   * @param new password
   * @returns true if successful
   */
  firstTimePasswordChange(
    oobCode: string,
    newPassword: string
  ): Promise<boolean>

}

export default IAuthService;
