var express = require('express')
var router = express.Router()

const connectToDatabase = require('../database/index') // initialize connection

router.get('/:id?', async (req, res) => {
    const { Offer } = await connectToDatabase()
    if (!req.params.id) {
        const list = await Offer.findAll({
            where: {
            },
            order: [
                ['name', 'ASC']
            ]
        })
        
        res.send(list)
    } else {
        const offer = await Offer.findByPk(req.params.id)
        if (offer)
            res.send(offer)
        else
            res.send({error: "model not found"})
    }
})

router.post('/', async (req, res) => {
    const { Offer }  = await connectToDatabase()
    const r = await Offer.create(req.body)
    const offer = await Offer.findByPk(r.id)
    if (offer)
        res.send(offer)
    else 
        res.send({error: 'model not found'})
})

router.patch('/:id', async (req, res) => {
    const { Offer }  = await connectToDatabase()
    await Offer.update(req.body, {
        where: {id: req.params.id},
    })

    const offer = await Offer.findByPk(req.params.id)
    if (offer)
        res.send(offer)
    else 
        res.send({error: 'model not found'})
})

router.delete('/:id', async (req, res) => {
    const { Offer }  = await connectToDatabase()
    const offer = await Offer.findByPk(req.params.id)
    if(offer) {
        var destroy_res = await offer.destroy()
        res.send({id: destroy_res.id})
    } else 
        res.send({error: 'model not found'})
})

module.exports = router