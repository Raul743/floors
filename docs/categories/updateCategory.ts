export default {
  put: {
    tags: ['Categories'],
    description: 'Update category',
    operationId: 'update',
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
      {
        name: 'designation',
        in: 'body',
        schema: {
          type: 'string',
          description: 'Designation of category',
          example: 'My Category',
          null: true,
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
