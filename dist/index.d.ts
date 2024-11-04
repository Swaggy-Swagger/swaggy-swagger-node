import { Express } from 'express';

export declare function setupSwagger(
	app: Express,
	host: string,
	port: number,
	jwtDevToken?: string
): void;
