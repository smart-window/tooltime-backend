var express = require('express')
var router = express.Router()

const connectToDatabase = require('../database/index') // initialize connection

router.get('/:id?', async (req, res) => {
    const { Product } = await connectToDatabase()
    if (!req.params.id) {
        const list = await Product.findAll({
            where: {
            },
            order: [
                ['name', 'ASC']
            ]
        })
        
        res.send(list)
    } else {
        const product = await Product.findByPk(req.params.id)
        if (product)
            res.send(product)
        else
            res.send({error: "model not found"})
    }
})

router.post('/', async (req, res) => {
    const { Product }  = await connectToDatabase()
    const r = await Product.create(req.body)
    const product = await Product.findByPk(r.id)
    if (product)
        res.send(product)
    else 
        res.send({error: 'model not found'})
})

router.patch('/:id', async (req, res) => {
    const { Product }  = await connectToDatabase()
    await Product.update(req.body, {
        where: {id: req.params.id},
    })

    const product = await Product.findByPk(req.params.id)
    if (product)
        res.send(product)
    else 
        res.send({error: 'model not found'})
})

router.delete('/:id', async (req, res) => {
    const { Product }  = await connectToDatabase()
    const product = await Product.findByPk(req.params.id)
    if(product) {
        var destroy_res = await product.destroy()
        res.send({id: destroy_res.id})
    } else 
        res.send({error: 'model not found'})
})

module.exports = router