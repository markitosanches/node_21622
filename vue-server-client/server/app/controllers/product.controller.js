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

exports.myFindOne = (req, res) => {
    const id = req.params.id
    Product.findByPk(id)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not find the data'
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

exports.myDestroy = (req, res) => {
    const id = req.params.id
    Product.destroy({ where: {id : id}})
    .then(num => {
        if (num == 1) {
            res.send({
                message: 'product was deleted'
            })
        }else {
            res.send({
                message: 'product was not deleted'
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not delete the data'
        })
    })
}

exports.myUpdate = (req, res) => {
    const id = req.params.id
    Product.update(req.body, {
        where: {id: id}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: 'product was updated'
            })
        }else {
            res.send({
                message: 'product was not updated'
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not update the data'
        })
    })

}