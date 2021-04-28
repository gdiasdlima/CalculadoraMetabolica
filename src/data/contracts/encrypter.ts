export interface Encrypter {
    compare(string: string, stringHash: string): Promise<Boolean>;
    encrypt(data: string): Promise<string>
}