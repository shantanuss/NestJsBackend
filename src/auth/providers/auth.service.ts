import { Injectable,forwardRef,Inject } from '@nestjs/common';
import { getUserDTO } from 'src/users/dtos/get-user.dto';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {

    constructor(@Inject(forwardRef(()=>UsersService))
        private userSvc:UsersService){}

    public login(email:string,password:string,id:string){
      const dto: getUserDTO = { id: 2 };
      const user = this.userSvc.findOneById(dto);
      return "sample_token"
    }

    public isAuthenticated(){
        return true;
    }
}

 // Ensure the correct type