import { SignInRequestModel } from "../../domain/models/signInRequestModel";
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

        if (!await this.cryptProvider.compare(data.password, alreadyLogin.password)) {
            return new UnauthorizedError();
        }

        const loginPerfil = await this.loginPerfilRepository.findByLogin(alreadyLogin)

        return { login: alreadyLogin, loginPerfil  }

    }
}