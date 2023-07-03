import {Router}from 'express'
//import User from './app/models/users';
import Sessionscontroler from './app/controlers/sessionscontroler';
import authMiddleware from './app/midlewares/auth';

import Usercontroler from './app/controlers/usercontroler';
//import Signscontroler from './app/controlers/signscontroler';
import testecontroler from './app/controlers/testecontroler';
import providercontroler from './app/controlers/providercontroler';
const routes=new Router();

routes.post('/users',Usercontroler.store)
routes.post('/sessions',Sessionscontroler.store)
routes.use(authMiddleware)
routes.post('/sessions',Sessionscontroler.store)
routes.put('/users',Usercontroler.Update)
routes.get('/signs', providercontroler.index)
routes.get('/users', Usercontroler.index)
routes.post('/teste',testecontroler.store)
export default routes