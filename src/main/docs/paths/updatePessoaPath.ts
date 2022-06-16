export const updatePessoaPath = {
    post: {
      tags: ['Pessoa'],
      summary: 'API para atualizar Pessoa',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/signUpParams'
            }
          }
        }
      },
      responses: {
        200: {
          description: 'pessoa atualizada'
        }
      }
    }
  }
  