# Swaggy-Swagger-Node

<br/>
<br/>
<p align="center">
<img src="https://github.com/user-attachments/assets/b3c3a16d-43aa-4689-8857-dab31f75f601" width="150" alt="Swaggy-Swagger-Logo" />
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/13513534-6217-4c10-abdc-cd228fcca076" width="300" alt="Swaggy Swagger" />
</p>
<br/>
<p align="center">
  <a href="https://jitpack.io/#Swaggy-Swagger/swagger-custom-java" target="_blank"><img src="https://jitpack.io/v/Swaggy-Swagger/swagger-custom-java.svg" alt="Jitpack Release"/></a>
  <a href="./LICENSE" target="_blank"><img src="https://img.shields.io/github/license/Swaggy-Swagger/swagger-custom-java?logo=github&color=blue" alt="License"/></a>
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FSwaggy-Swagger%2Fswagger-custom-java?ref=badge_shield" target="_blank"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FSwaggy-Swagger%2Fswagger-custom-java.svg?type=shield&issueType=license" alt="Fossa License Scan" /></a>
<a href="https://app.fossa.com/projects/git%2Bgithub.com%2FSwaggy-Swagger%2Fswagger-custom-java?ref=badge_shield&issueType=security" target="_blank"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FSwaggy-Swagger%2Fswagger-custom-java.svg?type=shield&issueType=security" alt="FOSSA Status"/></a>
  <a href="https://github.com/Swaggy-Swagger/swagger-custom-java"><img src="https://img.shields.io/github/v/release/Swaggy-Swagger/swagger-custom-java?logo=github" alt="github release"/></a>
  <a href="https://github.com/Swaggy-Swagger/swagger-custom-java"><img src="https://img.shields.io/github/release-date/Swaggy-Swagger/swagger-custom-java?color=blue&logo=github" alt="github last release date" /></a>
<br>
  <a href="https://github.com/Swaggy-Swagger/swagger-custom-java/graphs/contributors" target="_blank"><img src="https://img.shields.io/github/contributors-anon/Swaggy-Swagger/swagger-custom-java?logo=github&color=blue" alt="github contributors" /></a>
  <a href="https://github.com/Swaggy-Swagger/swagger-custom-java"><img src="https://img.shields.io/github/stars/Swaggy-Swagger/swagger-custom-java?logo=github" alt="github stars" /></a>
  <a href="https://github.com/Swaggy-Swagger/swagger-custom-java"><img src="https://img.shields.io/github/discussions/Swaggy-Swagger/swagger-custom-java?logo=github&color=blue" alt="github discussions" /></a>
</p>
</br>

## Overview

**Swaggy UI** is a javascript project intended for use in single-page applications that to enhance the user interface of the **Swaggy-Swagger** library.
**Swaggy-Swagger** builds upon the popular Swagger framework, providing a more intuitive and flexible API documentation experience. </br>

See **Swaggy-Swagger** [README.md](https://github.com/Swaggy-Swagger) for more details. </br>

#### Demo Website

[swaggy-swagger.vercel.app](https://swaggy-swagger.vercel.app/#/)

#### Demo Video

<div>
<a href="https://www.youtube.com/watch?v=oD8ShZGQrqo"><img src="https://img.shields.io/badge/YOUTUBE-FF0000?style=for-the-badge&logo=YouTube&logoColor=white&link=https://www.youtube.com/watch?v=oD8ShZGQrqo"/></a>
</div>
</br></br>

**Swaggy-Swagger-Node** is a customized version of **Swagger UI** tailored specifically for Node.js users. This npm package enhances API documentation experiences by building upon the original Swagger UI framework, offering a more intuitive and flexible interface for Node.js applications. The UI closely follows the original [Swagger UI](https://github.com/swagger-api/swagger-ui) design, ensuring a familiar look and feel for users.

For more information on the original Swagger UI project, please visit the official [Swagger UI repository](https://github.com/swagger-api/swagger-ui).

## How To Install

To install **Swaggy-Swagger-Node** in your Node.js project, follow these steps.

### 1. Install the package

Use npm to install `swaggy-swagger`:

```bash
npm install swaggy-swagger
```

### 2. Set up Express and Swagger

Create an app.ts file (or app.js if you're using JavaScript) and set up your Express server. Use the setupSwagger function from swaggy-swagger to integrate Swagger UI.

```javascript
import express, { Request, Response } from 'express';
import { setupSwagger } from 'swaggy-swagger';

const app = express();
const host = 'localhost';
const port = 3000;

// Apply Swagger settings
setupSwagger(app, host, port);

// Add a sample API endpoint
/**
 * @swagger
 * /test:
 *   get:
 *     summary: Test API
 *     description: A simple test API endpoint
 *     responses:
 *       200:
 *         description: Returns a sample message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hello, this is a test API!"
 */
app.get('/test', (req: Request, res: Response) => {
	res.json({ message: 'Hello, this is a test API!' });
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running at http://${host}:${port}`);
	console.log(`Swagger UI available at http://${host}:${port}/swagger`);
});
```

### 3. Run the Application

- If you're using TypeScript, you can run the file directly with ts-node:

```bash
npx ts-node src/app.ts
```

- If you're using JavaScript, start the server with Node.js:

```bash
node src/app.js
```

## Contact

<a href="mailto:clcc001@naver.com"><img src="https://img.shields.io/badge/mail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=clcc001@naver.com"/></a>
