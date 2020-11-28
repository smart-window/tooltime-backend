var express = require('express')
var router = express.Router()

const connectToDatabase = require('../database/index') // initialize connection

router.get('/:id?', async (req, res) => {
    const { Lead } = await connectToDatabase()
    if (!req.params.id) {
        const list = await Lead.findAll({
            where: {
            },
            order: [
                ['name', 'ASC']
            ]
        })
        
        res.send(list)
    } else {
        const lead = await Lead.findByPk(req.params.id)
        if (lead)
            res.send(lead)
        else
            res.send({error: "model not found"})
    }
})

router.post('/', async (req, res) => {
    const { Lead }  = await connectToDatabase()
    const r = await Lead.create(req.body)
    const lead = await Lead.findByPk(r.id)
    if (lead)
        res.send(lead)
    else 
        res.send({error: 'model not found'})
})

router.patch('/:id', async (req, res) => {
    const { Lead }  = await connectToDatabase()
    await Lead.update(req.body, {
        where: {id: req.params.id},
    })

    const lead = await Lead.findByPk(req.params.id)
    if (lead)
        res.send(lead)
    else 
        res.send({error: 'model not found'})
})

router.delete('/:id', async (req, res) => {
    const { Lead }  = await connectToDatabase()
    const lead = await Lead.findByPk(req.params.id)
    if(lead) {
        var destroy_res = await lead.destroy()
        res.send({id: destroy_res.id})
    } else 
        res.send({error: 'model not found'})
})

module.exports = router