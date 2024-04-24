import users from './users/users';
import cards from './cards/cards';
//import your api endpoint group here

export default { users, cards }; //end then export it within this default object

//this way you will be able to use api in your redux slice like :
//import api from "src/api"
//api.users.login({email: "user@example.com", password: "qwerty123"})