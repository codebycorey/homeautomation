import {Controller, Get} from "routing-controllers";

@Controller()
export class UserController {

    @Get("/users")
    public getAll(): string {
       return "This action returns all users";
    }
}
