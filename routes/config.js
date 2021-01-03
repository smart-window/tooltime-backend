var express = require('express')
var router = express.Router()

const connectToDatabase = require('../database/index') // initialize connection

router.get('/:key?', async (req, res) => {
    try {
        const { Config } = await connectToDatabase()
        if (!req.params.key) {
            const list = await Config.findAll({
                where: {
                },
                order: [
                    ['key', 'ASC']
                ]
            })
            
            res.send(list)
        } else {
            const config = await Config.findByPk(req.params.key)
            if (config)
                res.send(config)
            else
                res.send({error: "model not found"})
        }
    } catch (e) {
        res.send(e)
    }
})

router.post('/', async (req, res) => {
    try {
        const { Config }  = await connectToDatabase()
        const r = await Config.create(req.body)
        const config = await Config.findByPk(r.key)
        if (config)
            res.send(config)
        else 
            res.send({error: 'model not found'})
    } catch (e) {
        res.send(e)
    }
})

router.patch('/:key', async (req, res) => {
    try {
        const { Config }  = await connectToDatabase()
        await Config.update(req.body, {
            where: {key: req.params.key},
        })

        const config = await Config.findByPk(req.params.key)
        if (config)
            res.send(config)
        else 
            res.send({error: 'model not found'})
    } catch (e) {
        res.send(e)
    }
})

router.delete('/:key', async (req, res) => {
    try {
        const { Config }  = await connectToDatabase()
        const config = await Config.findByPk(req.params.key)
        if(config) {
            var destroy_res = await config.destroy()
            res.send({key: destroy_res.key})
        } else 
            res.send({error: 'model not found'})
    } catch (e) {
        res.send(e)
    }
})

module.exports = router