import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://mongodb:mongodb@cluster0.0flyx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { 
      useNewUrlParser: true,
      useUnifiedTopology: true }),
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

/** 
 * mongoose
 * {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
 * 
 */
export class AppModule {}
