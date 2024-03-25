import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getPublicDir, startDevServer } from '@hugodev/frontend';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bodyParser: false,
  });

  await startDevServer(app);

  app.useStaticAssets(getPublicDir(), {
    immutable: true,
    maxAge: '1y',
    index: false,
  });

  const selectedPort = process.env.PORT || 3000;

  await app.listen(selectedPort);
}
bootstrap();
