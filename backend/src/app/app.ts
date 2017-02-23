import { Server } from './system/Server';

import { UserController } from './controller/User';

export class App extends Server{

    constructor(){
        super();

        super.useController(new UserController());
    }

    protected controllers(): void {
        
    }

}