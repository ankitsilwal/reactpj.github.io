import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Post('create')
  async createUser(@Body() dto: any) {
    try {
      return await this.apiService.createUser(dto);
    } catch (error) {
      throw new HttpException(error.message, error.stauscode ?? 400);
    }
  }
}
