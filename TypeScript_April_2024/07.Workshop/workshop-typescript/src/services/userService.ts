// import {CONFIG} from '../constants'

import { UserDetails } from "../types/user";
import { HttpService } from "./httpService";

// const url = CONFIG.baseUrl

export class UserService extends HttpService<UserDetails>{
    constructor(baseUrl: string) {
        super(`${baseUrl}/users`); // new HttpService(`${baseUrl}/users`);
    }

    getUser() {}


}