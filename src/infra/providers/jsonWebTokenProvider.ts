import * as jwt from 'jsonwebtoken'
import { ITokenProvider } from '../../data/contracts/providers/ITokenProvider'

export class JsonWebTokenProvider implements ITokenProvider {
  async compare (string: string): Promise<any> {
    try {
      const decoded = await jwt.verify(string, process.env.APP_SECRET)
      return decoded
    } catch (error) {
      return undefined
    }
  }

  async generate (string: string): Promise<string> {
    return jwt.sign(string, process.env.APP_SECRET, {
      expiresIn: '1d'
    })
  }
}
