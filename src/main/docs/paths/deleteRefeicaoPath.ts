export const deleteRefeicaoPath = {
    put: {
      tags: ['Refeicao'],
      summary: 'API para controlar Refeicao',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/deleteRefeicaoParams'
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
  