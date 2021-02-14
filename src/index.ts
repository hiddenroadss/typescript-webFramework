import {UserForm} from './views/UserForm';
import { UserEdit } from './views/UserEdit';
import {User} from './models/User';


const user = User.buildUser({name: 'Name', age: 200})
const root = document.getElementById('root');

if (root) {
    const userEdit = new UserEdit(root,user)

    userEdit.render();
} else {
    throw new Error('Root elemetn not found')
}
