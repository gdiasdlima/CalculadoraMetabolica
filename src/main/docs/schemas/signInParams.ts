export const signInParamsSchema = {
    type: 'object',
    properties: {
      email: {
        type: 'string'
      },
      senha: {
        type: 'string'
      }
    },
    required: ['email', 'password']
  }
  