import { Router, Request, Response, NextFunction } from 'express';
import { BaseController } from 'app/system/BaseController';

/**
 * All user routes
 */
export class UserController extends BaseController {

    constructor(){
        super();

        this.baseRoute = 'user';
    }

    /**
     * Returns user profile
     */
    @this.post
    @this.route('get_profile')
    private getProfile(req: Request, res: Response) {
        res.json({message: 'adsdas'})
    }

    /**
     * Login
     */
    @this.post
    @this.route('login')
    private login(req: Request, res: Response) {

        res.json({message: 'hello world!'});

    }

    /**
     * Index
     */
    @this.get
    @this.route('')
    private index(req: Request, res: Response){
        res.json({message: 'Hello world!'});
    }

}
