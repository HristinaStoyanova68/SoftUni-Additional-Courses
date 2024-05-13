import { Post } from "../types/post";
import { HttpService } from "./httpService";


export class PostService extends HttpService<Post>{
    constructor(baseUrl: string) {
        super(`${baseUrl}/posts`); // new HttpService(`${baseUrl}/posts`);
    }

    getUserPost(userId: number) {}
}