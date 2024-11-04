"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const swaggerOptions = (host, port, jwtDevToken) => ({
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Custom Swagger API',
            version: '1.0.0',
            description: `This is a custom Swagger API template.`,
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
        servers: [
            {
                url: `http://${host}:${port}`,
            },
        ],
    },
    apis: ['./src/**/*.ts'], // 필요한 경로로 수정
});
const setupSwagger = (app, host, port, jwtDevToken) => {
    const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions(host, port, jwtDevToken));
    app.use('/swagger', express_1.default.static(path_1.default.resolve(__dirname, '../public')));
    app.get('/swagger', (req, res) => {
        res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Swaggy Swagger</title>
        <link rel="stylesheet" type="text/css" href="/swagger/swagger-ui.css">
      </head>
      <body>
        <div id="swagger-ui"></div>
        <script src="/swagger/swagger-ui-bundle.js"></script>
        <script src="/swagger/swagger-ui-standalone-preset.js"></script>
        <script>
          SwaggerUIBundle({
            spec: ${JSON.stringify(swaggerDocs)},
            dom_id: '#swagger-ui',
            presets: [
              SwaggerUIBundle.presets.apis,
              SwaggerUIStandalonePreset
            ],
            layout: "StandaloneLayout"
          });
        </script>
      </body>
      </html>
    `);
    });
};
exports.default = setupSwagger;
