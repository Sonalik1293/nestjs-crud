
import { Repository, EntityRepository, Any } from 'typeorm';
import { UserDto } from './user-dto';
import { User } from './user.entity';

@EntityRepository(User)
export class userRepository extends Repository<User> {

    public async createUser(userDto: UserDto,): Promise<User> {
        const { firstname, lastname } = userDto;

        const user = new User();
        user.firstname = firstname;
        user.lastname = lastname;


        await user.save();
        return user;
    }
}