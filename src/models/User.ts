import { AxiosResponse } from 'axios';

import { Model } from './Model';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';


export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const hostUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes(attrs),
            new ApiSync(hostUrl),
            new Eventing()
        );
    }
}