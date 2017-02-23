import { Router, Request, Response, NextFunction, RequestHandler } from 'express';

export class BaseController{

    public router: Router;

    /**
     * Root route path for controller
     */
    public baseRoute: string = '';

    constructor(){
        this.router = Router(this.baseRoute);

        console.log(this);
    }

}

export function post(path: string){
    return (target: any, propertyKey: string, descriptor: any) => {
        if(!target._posts_methods){
            target._posts_methods = [];
        }
        console.log(target);
        target._posts_methods.push({path: path, method: descriptor.value});
    }
};
