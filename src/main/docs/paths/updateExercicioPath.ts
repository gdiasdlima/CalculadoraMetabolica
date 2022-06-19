export const updateExercicioPath = {
    put: {
      tags: ['Exercicio'],
      summary: 'API para controle de exercicio',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/updateExercicioParams'
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
  