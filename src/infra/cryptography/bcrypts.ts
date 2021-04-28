import { Encrypter } from "../../data/contracts/encrypter";
import bcrypt from 'bcrypt'
export class Bcrypt implements Encrypter {

    constructor() {

    }

    async encrypt(string: string): Promise<string> {
        return await bcrypt.hash(string, 12)
    }
}