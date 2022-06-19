export const deleteExercicioPath = {
    post: {
      tags: ['Exercicio'],
      summary: 'API para controle de Exercicio',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/deleteExercicioParams'
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
  