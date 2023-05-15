import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { version } from '../../package.json';

import { CONFIG } from './';

const { DOCS_DESCRIPTION, DOCS_TITLE } = CONFIG;

const options = new DocumentBuilder()
  .setTitle(DOCS_TITLE)
  .setDescription(DOCS_DESCRIPTION)
  .setVersion(version)
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'Enter JWT token',
      in: 'header',
    },
    'JWT-auth', // This name here is important for matching up with @ApiBearerAuth() in your controller!
  )
  .build();
export const OpenAPIBuilder = (app: INestApplication) =>
  SwaggerModule.createDocument(app, options);
