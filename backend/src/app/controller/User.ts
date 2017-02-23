import { Router, Request, Response, NextFunction, RequestHandler } from 'express';
import { BaseController, post } from '../system/BaseController';

/**
 * All user routes
 */

export class UserController extends BaseController {

    constructor(){
        super();

        this.baseRoute = 'user';
    }

    /**
     * Index
     */
    @post('')
    private index(req: Request, res: Response){
        res.json({message: 'Hello world!'});
    }

}