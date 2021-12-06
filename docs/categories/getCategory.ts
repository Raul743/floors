export default {
  get: {
    tags: ['Categories'],
    description: 'Get category',
    operationId: 'show',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          type: 'number',
          description: 'Category id',
          example: 1,
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
                data: {
                  type: 'object',
                  $ref: '#/components/schemas/Category',
                  null: true,
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
