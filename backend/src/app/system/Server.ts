import { Application, Router, Request, Response } from 'express';
import * as express from 'express';

import { BaseController } from 'app/system/BaseController';

export class Server {

    /**
     * Express app instance
     */
    public app: Application;

    /**
     * Bootstraps server in main.js
     */
    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {

        this.app = express();

        this.config();

        this.controllers();

    }

    /**
     * App configuration
     */
    protected config(): void {}

    /**
     * Initialise routes and controllers
     */
    protected controllers(): void {}

    /**
     * Sets up controller extended from BaseController
     */
    public useController(controller: BaseController): void {

        this.app.use(controller.router);

    }
}