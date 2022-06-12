import { SignInRequestModel } from "../../domain/models/signInRequestModel";
import { SignInUseCase } from "../../domain/useCases/signInUseCase";
import { NotFoundError } from "../../presentation/errors/notFoundError";
import { UnauthorizedError } from "../../presentation/errors/unauthorizedError";
import { Encrypter } from "../contracts/repositories/encrypter";
import { ILoginRepository } from "../contracts/repositories/login";
import { IPessoaRepository } from "../contracts/repositories/pessoa";

export class SignInService implements SignInUseCase {

    constructor(
        private readonly loginRepository: ILoginRepository,
        private readonly cryptProvider: Encrypter,
        private readonly pessoaRepository: IPessoaRepository
    ) { }

    async sign(data: SignInRequestModel): Promise<any> {

        const alreadyLogin = await this.loginRepository.findByEmail(data.email);

        if (!alreadyLogin) {
            return new NotFoundError('participante');
        }   

        if (!await this.cryptProvider.compare(data.senha, alreadyLogin.senha)) {
            return new UnauthorizedError();
        }
        alreadyLogin.data_ultimo_acesso = new Date()

        await this.loginRepository.update(alreadyLogin);

        await this.pessoaRepository.findByID(alreadyLogin.pessoa.id)
        return alreadyLogin 

    }
}