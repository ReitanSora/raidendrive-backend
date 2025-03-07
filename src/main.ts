import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

/**
 * Main function that initialize NestJS aplication
 * Configure Global Pipes to validate DTO's attributes and ingnoring what is not declared
 * Enable CORS in aplication
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global Pipes configuration
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));

  // Configuration of CORS
  app.enableCors();

  // Port configuration
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
