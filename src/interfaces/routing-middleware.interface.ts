import { Router } from "express";
import { ServerExpress } from "../config/server";


export abstract class RoutingMiddleware {
    abstract run( server: ServerExpress ): void;
}