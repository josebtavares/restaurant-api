const Restaurant = require('../Models/restau.model')


const listRestaurantAll = async (res) => {

    const restau = await Restaurant.find()

    res.send(restau)

    // res.send({response: "Operation < LIST ALL USERS > out of service.... try later"})
}



const listRestaurantById = async (req, res) => {

    const restau = await Restaurant.findById(req.params.id)
    res.send(restau)

    // res.send({response: "Operation < LIST SPECIFIQUE USER > out of service.... try later"})
}




const updateRestaurantById = async (req, res) => {
    const { name, email, sede, avatar_url } = req.body
    const restau = {
        name: name,
        email: email,
        sede: sede,
        avatar_url: avatar_url
    }
    //  findByIdAndUpdate
    await Restaurant.findByIdAndUpdate(req.params.id, restau)
        .then(() => {
            res.send({ respnse: "updated successfully :)" })
        })
        .catch(() => {
            res.send({ respnse: "Failled on save :(" })
        })

    // res.send({response: "Operation < UPDATE USER > out of service.... try later"})
}




const deleteRestaurantById = async (req, res) => {

    await Restaurant.findByIdAndRemove(req.params.id)

    res.send({ response: `Restaurant with id << ${req.params.id} >> delected successfullly! ` })

    // res.send({response: "Operation < DELETE USER > out of service.... try later"})
}



/*********************  INSERT NEW USER ********************************* */

const insertRestaurant = async (req, res) => {
    const {name, email , sede , avatar_url } = req.body
    const restau = new Restaurant({
        name: name,
        email: email,
        sede: sede,
        avatar_url: avatar_url
    })
    restau.save()
        .then(() => {
            res.status(200).send({ response: `Restaurant ${name} added successfully! :)` })
        })
        .catch(() => {
            res.status(404).send({ response: "Fail on send RESTAURANT to the db" })
        })

    // res.send({response: "Operation < INSERT USER > out of service.... try later"})

}
/** --------------------------------------------------------------------- */


module.exports = {
    listRestaurantAll,
    listRestaurantById,
    updateRestaurantById,
    deleteRestaurantById,
    insertRestaurant
}