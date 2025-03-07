import { Request } from 'express';

/**
 * Custom interface that inherits from the Request class
 */
export interface CustomRequest extends Request {
  /**
   * User data
   * Specific attribute user, composed of sub, username and email
   * @type {{sub: string, username: string, email: string} | undefined}
   */
  user?: {
    sub: string,
    username: string,
    email: string
  }
}