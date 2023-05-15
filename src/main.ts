import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

import { CONFIG } from './config';
import { OpenAPIBuilder } from './config/swagger';

const { API_VERSION, PORT } = CONFIG;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Set API version.
   */
  app.setGlobalPrefix(API_VERSION);

  /**
   * Setup Swagger module.
   */
  SwaggerModule.setup('docs', app, OpenAPIBuilder(app), {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(PORT);
}
bootstrap();
