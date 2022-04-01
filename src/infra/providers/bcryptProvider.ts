import * as bcrypt from 'bcrypt'
import { ICryptProvider } from '../../data/contracts/providers/ICryptProvider'

export class BCryptProvider implements ICryptProvider {
  async compare (string: string, stringHash: string): Promise<boolean> {
    return await bcrypt.compare(string, stringHash)
  }

  async crypt (string: string): Promise<string> {
    return await bcrypt.hash(string, 8)
  }
}
