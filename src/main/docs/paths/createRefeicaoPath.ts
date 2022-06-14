export const createRefeicaoPath = {
    post: {
      tags: ['Refeicao'],
      summary: 'API para controlar Refeicao',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/CreateRefeicaoParamsSchema'
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
  