export default {
  post: {
    tags: ['Plates'],
    description: 'Prepare Plate',
    operationId: 'prepare',
    parameters: [
      {
        name: 'designation',
        in: 'path',
        schema: {
          type: 'number',
          description: 'Plate id',
          example: '1',
        },
      },
    ],

    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                },
                message: {
                  type: 'string',
                  null: true,
                  example: 'preparePlateSuccessfull',
                },
              },
            },
          },
        },
      },
      400: {
        description: 'Bad Request',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                  example: false,
                },
                message: {
                  type: 'string',
                  null: true,
                },
              },
            },
          },
        },
      },
      500: {
        description: 'Internal Server Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                  example: false,
                },
                message: {
                  type: 'string',
                  null: true,
                },
              },
            },
          },
        },
      },
    },
  },
};
