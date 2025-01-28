import { Request } from 'express';

export interface CustomRequest extends Request {
  user?: {
    sub: string,
    username: string,
    email: string
  }
}