import { Login } from "../../data/models/login";

export interface CreateLoginUseCase {
    create(user: Login): Promise<Login>
}