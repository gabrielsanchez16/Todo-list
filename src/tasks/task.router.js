const router = require('express').Router()
const httpTask = require('./tasks.http')

router.route('/tasks')
    .get(httpTask.getAll)
    .post(httpTask.create)


router.route('/tasks/:id')
    .delete(httpTask.deleteT)
    .put(httpTask.updateT)
    .get(httpTask.getById)


module.exports ={
    router
}