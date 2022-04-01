export interface ICryptProvider {
  compare: (string: string, stringHash: string) => Promise<Boolean>
  crypt: (string: string) => Promise<string>
}
