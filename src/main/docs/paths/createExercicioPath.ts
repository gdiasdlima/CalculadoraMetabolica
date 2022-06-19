export const createExercicioPath = {
    post: {
      tags: ['Exercicio'],
      summary: 'API para controle de Exercicio',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/createExercicioParams'
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
  