import { LoginModel } from "../entities/login";

export interface ILoginRepository {
    create(user: LoginModel): Promise<LoginModel>
    findByEmail(email : string) : Promise<LoginModel>;
    update(user: LoginModel): Promise<void>;
}