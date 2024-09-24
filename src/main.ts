import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function start() {
  try {
    const PORT = process.env.PORT || 3030;
    console.log(PORT);

    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe())
    await app.listen(PORT, () => {
      console.log(`Server started at ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    
  }
}
start();
