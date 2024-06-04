export const options = {
  // Open API JSON Docs endpoint.
  baseDir: __dirname,

  // Expose Open API JSON Docs documentation in `apiDocsPath` path.
  exposeApiDocs: false,

  // Expose OpenAPI UI
  exposeSwaggerUI: true,

  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: [
    '../../../application/controller/**/*.ts',
    '../../../application/controller/**/*.js',
    './default.ts',
    './default.js'
  ],

  info: {
    description: '',
    title: 'Base API',
    version: '1.0.0'
  },

  // multiple option in case you want more that one instance
  multiple: true,

  // Set non-required fields as nullable by default
  notRequiredAsNullable: false,

  security: {
    BearerAuth: {
      scheme: 'bearer',
      type: 'http'
    }
  },

  servers: [
    {
      description: 'Local server',
      url: '/api/v1'
    }
  ],

  swaggerUIPath: '/api-docs',

  // You can customize your UI options.
  // you can extend swagger-ui-express config. You can checkout an example of this
  // in the `example/configuration/swaggerOptions.js`
  swaggerUiOptions: {}
};
