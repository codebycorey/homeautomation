import {Controller, Get} from "routing-controllers";

@Controller()
export class TestController {

    @Get("/test")
    public getAll(): string {
       return "This action returns all test data";
    }
}
