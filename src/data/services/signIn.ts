import { SignInRequestModel } from "../../domain/models/signInRequestModel";
import { SignInUseCase } from "../../domain/useCases/signInUseCase";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { UnauthorizedError } from "../../presentation/errors/unauthorizedError";
import { Encrypter } from "../contracts/encrypter";
import { ILoginRepository } from "../contracts/loginRepository";

export class SignInService implements SignInUseCase {

    constructor(
        private loginRepository: ILoginRepository,
        private cryptProvider: Encrypter
    ) { }

    async sign(data: SignInRequestModel): Promise<any> {

        const alreadyLogin = await this.loginRepository.findByEmail(data.email);

        if (!alreadyLogin) {
            return new NotFoundError('participante');
        }

        if (!await this.cryptProvider.compare(data.senha, alreadyLogin.senha)) {
            return new UnauthorizedError();
        }

        return alreadyLogin 

    }
}