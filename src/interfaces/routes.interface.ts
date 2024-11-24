import { Router } from "express";

export abstract class Routes {
    abstract run(): Router;
}