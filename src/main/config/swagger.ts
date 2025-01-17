import swaggerConfig from '../docs'

import { serve, setup } from 'swagger-ui-express'
import { Express } from 'express'
import { noCache } from '../midlewares/noCache'

export default (app: Express): void => {
  app.use('/swagger', noCache, serve, setup(swaggerConfig))
}
