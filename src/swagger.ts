import swaggerJsDoc from 'swagger-jsdoc';
import express, { Express, Request, Response } from 'express';
import path from 'path';

const swaggerOptions = (host: string, port: number, jwtDevToken?: string) => ({
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

const setupSwagger = (
	app: Express,
	host: string,
	port: number,
	jwtDevToken?: string
) => {
	const swaggerDocs = swaggerJsDoc(swaggerOptions(host, port, jwtDevToken));

	app.use('/swagger', express.static(path.resolve(__dirname, '../public')));

	app.get('/swagger', (req: Request, res: Response) => {
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

export default setupSwagger;
