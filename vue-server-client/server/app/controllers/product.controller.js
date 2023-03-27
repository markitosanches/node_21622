const db = require('../models')
const Product = db.products

exports.myFindAll = (req, res) => {
    Product.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not find the table'
        })
    })
}

exports.myCreate = (req, res) => {
    // console.log(req.body)
    if(!req.body.name) {
        res.status(400).send({
            message: 'The name is mandatory'
        })
        return;
    }

    Product.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not insert the data'
            })
        })
}