import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { UserDto } from './user-dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) { }


  /* @Post()
   create(@Body() UserDto: UserDto): Promise<any> {
     return this.userService.create(UserDto);
   }
 
   @Get()
   findAll(): Promise<any> {
     return this.userService.findAll();
   }
 
   @Get(':id')
   findOne(@Param('id') id: string) {
     return this.userService.findOne(+id);
   }
 
   @Put(':id')
   update(@Param('id') id: string, @Body() updateUserDto: UserDto) {
     return this.userService.update(+id, updateUserDto);
   }
 
   @Delete(':id')
   remove(@Param('id') id: string) {
     return this.userService.remove(+id);
   }*/

  @Get()
  async showAllUsers() {
    const users = await this.userService.showAll();
    return {
      status: HttpStatus.OK,
      message: 'Users fetched successfully',
      users
    };
  }

  @Post()
  async createUsers(@Body() data: UserDto) {
    const user = await this.userService.create(data);
    return {
      status: HttpStatus.OK,
      message: 'User created successfully',
      user
    };
  }

  @Get(':id')
  async readUser(@Param('id') id: number) {
    const data = await this.userService.read(id);
    return {
      status: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }

  @Put(':id')
  async uppdateUser(@Param('id') id: number, @Body() data: Partial<UserDto>) {
    await this.userService.update(id, data);
    return {
      status: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.userService.destroy(id);
    return {
      status: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}


