import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { getUserDTO } from "../dtos/get-user.dto";
import { users } from "./users-data";
import { AuthService } from "src/auth/providers/auth.service";

@Injectable()
export class UsersService {
    users: any[];
    constructor(@Inject(forwardRef(() => AuthService))
    private authSvc: AuthService) {
        this.users = users;
    }
    public findAll(getUsersParamDta: getUserDTO, limit: number, page: number) {
        const isAuth = this.authSvc.isAuthenticated();
        if (isAuth) {
            return this.users;
        }

    }

    public findOneById(getUsersParamDto: getUserDTO) {
        console.log(getUsersParamDto.id);
        return this.users.find(users => users.id === getUsersParamDto.id);
    }
}