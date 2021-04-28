import { SignInRequestModel } from "../models/signInRequestModel";

export interface SignInUseCase {
    sign(data: SignInRequestModel): Promise<any>
}