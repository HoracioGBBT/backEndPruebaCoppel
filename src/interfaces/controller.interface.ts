import { Request, Response } from "express";

declare global {
    namespace Express {
      interface Request {
        user: any
      }
    }
  }

export interface Controller {
    run(req: Request, resp: Response): Promise<Response>
}