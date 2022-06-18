export const updateRefeicaoPath = {
    put: {
      tags: ['Refeicao'],
      summary: 'API para controlar Refeicao',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/updateRefeicaoParams'
            }
          }
        }
      },
      responses: {
        200: {
          description: 'sucesso'
        }
      }
    }
  }
  