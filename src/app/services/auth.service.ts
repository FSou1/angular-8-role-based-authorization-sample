import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Role } from '../models/role';

@Injectable()
export class AuthService {
    private user: User = { Role: Role.Admin } as User;

    isAuthorized() {
        return !!this.user;
    }

    hasRole(role: Role) {
        return this.user.Role === role;
    }
}
