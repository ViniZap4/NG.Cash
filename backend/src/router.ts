import { Router } from "express";

//controllers
import CheckUser from "./controllers/CheckUser";
import GetAllUser from "./controllers/GetAllUsers";
import GetUser from "./controllers/GetUser";
import CreateUser from "./controllers/CreateUser";
import DeleteUser from "./controllers/DeleteUser";
import AuthUser from "./controllers/AuthUser";

import GetBalance from "./controllers/GetBalance";
import MakeTransaction from "./controllers/MakeTransaction";

//middlewares
import checkToken from "./middleware/checkToken";


const router = Router();

//public routes
const getAllUser = new GetAllUser;
router.get('/users', getAllUser.handle);

const getUser = new GetUser;
router.get('/user/:id', getUser.handle);

const checkUser = new CheckUser;
router.get('/username/:username', checkUser.handle);

const createUser = new CreateUser;
router.post('/user', createUser.handle);

const deleteUser = new DeleteUser;
router.delete('/account/:id', deleteUser.handle);

const authUser = new AuthUser;
router.post('/auth', authUser.handle);

//private routes
const getBalance = new GetBalance;
router.get('/balance/:id', checkToken, getBalance.handle)

const makeTransaction = new MakeTransaction;
router.post('/transaction/:id', checkToken, makeTransaction.handle);


export default router;