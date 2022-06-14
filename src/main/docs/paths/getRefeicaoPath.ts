export const getRefeicaoPath = {
    post: {
      tags: ['Refeicao'],
      summary: 'API para controlar Refeicao',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/GetRefeicaoParamsSchema'
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
  