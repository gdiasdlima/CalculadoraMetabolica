import { Login } from "../models/login";

export interface loginRepository {
    create(user: Login): Promise<Login>
}