import { Login } from "../../data/entities/login";
import { SignUpRequestModel } from "../models/SignUpRequestModel";

export interface SignUpUseCase {
    create(user: SignUpRequestModel): Promise<Login>
}