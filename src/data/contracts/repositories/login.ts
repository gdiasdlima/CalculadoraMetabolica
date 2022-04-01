import { Login } from "../../entities/login";

export interface ILoginRepository {
    create(user: Login): Promise<Login>
    findByEmail(email : string) : Promise<Login>;
    update(user: Login): Promise<void>;
}