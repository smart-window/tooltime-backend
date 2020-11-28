var express = require('express')
var router = express.Router()

const connectToDatabase = require('../database/index') // initialize connection

router.get('/:id?', async (req, res) => {
    const { Location } = await connectToDatabase()
    if (!req.params.id) {
        const list = await Location.findAll({
            where: {
                active: (req.params.active ? req.params.active : true)
            },
            order: [
                ['name', 'ASC']
            ]
        })
        
        res.send(list)
    } else {
        const location = await Location.findByPk(req.params.id)
        if (location)
            res.send(location)
        else
            res.send({error: "model not found"})
    }
})

router.post('/', async (req, res) => {
    const { Location }  = await connectToDatabase()
    const r = await Location.create(req.body)
    const location = await Location.findByPk(r.id)
    if (location)
        res.send(location)
    else 
        res.send({error: 'model not found'})
})

router.patch('/:id', async (req, res) => {
    const { Location }  = await connectToDatabase()
    await Location.update(req.body, {
        where: {id: req.params.id},
    })

    const location = await Location.findByPk(req.params.id)
    if (location)
        res.send(location)
    else 
        res.send({error: 'model not found'})
})

router.delete('/:id', async (req, res) => {
    const { Location }  = await connectToDatabase()
    const location = await Location.findByPk(req.params.id)
    if(location) {
        var destroy_res = await location.destroy()
        res.send({id: destroy_res.id})
    } else 
        res.send({error: 'model not found'})
})

module.exports = router