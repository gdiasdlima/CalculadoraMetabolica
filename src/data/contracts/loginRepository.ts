import { Login } from "../models/login";

export interface ILoginRepository {
    create(user: Login): Promise<Login>
}