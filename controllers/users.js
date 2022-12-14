const User = require ('../models/user') ;

//get all users
const findUser =  async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send({ msg: 'all users', users })
    } catch (error) {
        res.status(500).send(error)
    }
}

// post a new user 
const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body)

        await newUser.save()
        res.status(200).send({ msg: 'user aded with seccess', newUser })
    } catch (error) {
        res.status(500).send('could not add the user')
    }
}

//put a user 
const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const updatedUser = await User.findOneAndUpdate(id, { $set: { ...req.body } })

        res.status(200).send('user updated')
    } catch (error) {
        res.status(500).send(error)
    }
}
//delete a user 
const deleteUser = async (req, res) => {
    try {
        await User.findOneAndDelete({ _id: req.params.id })
        res.send('user deleted with seccess')
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports ={
    deleteUser,updateUser,createUser,findUser
}