const express = require ('express') ;
const userRouter = express.Router() ;
const {deleteUser,updateUser,createUser,findUser}= require('../controllers/users') ;


// get all users

userRouter.get('/users',findUser);

//create user

userRouter.post('/new',createUser);

//update user

userRouter.put ('/edit/:id',updateUser);

//delete user

userRouter.delete('/:id',deleteUser);

module.exports = userRouter;