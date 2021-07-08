import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { setupDB } from "./db";

async function bootstrap() {
  await setupDB();
  return;
  // API Boostrap (auto connects to DB)
  const app = await NestFactory.create(AppModule);
  // OpenAPI/Swagger documentation bootstrap
  const config = new DocumentBuilder()
    .setTitle("IDEMS Apps API")
    .setDescription("App-Server Communication")
    .setVersion("1.0")
    .addTag("api")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  await app.listen(process.env.API_PORT || 3000);
}
bootstrap();
