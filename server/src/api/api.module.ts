import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './api.schema';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
