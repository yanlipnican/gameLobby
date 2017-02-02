import { Server } from 'app/system/Server';

import { UserController } from 'app/controller/User';

export class App extends Server{

    protected config(): void {

    }

    protected controllers(): void {
        this.useController(new UserController());
    }

}