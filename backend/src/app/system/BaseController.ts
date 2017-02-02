import { Router, Request, Response, NextFunction, RequestHandler } from 'express';

export class BaseController{

    public router: Router;

    /**
     * Root route path for controller
     */
    public baseRoute: string = '';

    constructor(){
        this.router = Router(this.baseRoute);
    }

    /**
     * Post decorator (needs @route decorator before)
     */
    post(target: RequestHandler, propertyKey: string, descriptor: any) {
        this.router.post(target.prototype.routePath, target);
    }

    /**
     * Get decorator (needs @route decorator before)
     */
    get(target: RequestHandler, propertyKey: string, descriptor: any) {
        this.router.get(target.prototype.routePath, target);
    }

    /**
     * Route decorator
     */
    route(path: string): MethodDecorator {
        return (target: RequestHandler, propertyKey: string, descriptor: any) => {
            target.prototype.routePath = path;
        };
    }

    /**
     * Use decorator
     */
    use(target: RequestHandler, propertyKey: string, descriptor: any) {
        this.router.use(target);
    };

}