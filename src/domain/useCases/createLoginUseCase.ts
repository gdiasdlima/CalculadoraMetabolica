import { LoginModel } from "../../data/models/login";
import { SignUpRequestModel } from "../models/SignUpRequestModel";

export interface SignUpUseCase {
    create(user: SignUpRequestModel): Promise<LoginModel>
}