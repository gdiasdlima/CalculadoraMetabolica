export interface ITokenProvider {
  compare: (token: string) => Promise<boolean>
  generate: (payload: any) => Promise<string>
}
