import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataResponseService } from 'src/comman/data-response.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { userRepository } from './user.repository';
import { UserService } from './user.service';

@Module({

    controllers: [UserController],
    providers: [UserService,DataResponseService],
    imports: [TypeOrmModule.forFeature([User])],
})
export class UserModule { }
