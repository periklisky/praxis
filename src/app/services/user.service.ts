import { Injectable } from "@angular/core";

export interface User {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    users: Array<User> = [];

    exists(user: User): boolean {
        for (const u of this.users) {
            if (u.email === user.email) {
                if (u.password === user.password)
                    return true;
            }
        }
        return false;
    }

    getUsers(): Array<User> {
        return this.users;
    }

    putUser(user: User) {
        this.users.push(user);
    }

    resetUser(email: string | null | undefined) {
        for (const u of this.users) {
            if (u.email === email) {
                u.password = 'reseted';
                return;
            }
        }
        console.log(`No user with email '${email}' was found`);
    }
}