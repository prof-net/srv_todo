const {Router} = require('express');
const router = Router()
const Task = require('./../madels/Task')

router.post('/add_task', async (req, res) => {
    const {
        title,
        planned_time,
        project,
    } = req.body;

    const percent = 0;
    const actual_time = 0;
    const date_start = new Date();
    const date_end = undefined;
    const count = 0;

    const task = new Task({title, planned_time, project, percent, actual_time, date_start, date_end, count})
    await task.save()
    return res.status(201).json({message: 'Новая задача создана'})
})

router.get('/get_tasks', async (req, res) => {
    const tasks = await Task.find();
    return res.status(201).json({tasks})
})

router.delete('/del_task', async (req, res) => {
    const {title} = req.body;
    const tasks = await Task.findOne({id: req.body._id});
    await tasks.delete();
    return res.status(201).json({message: `Задача ${title} была удвлена`})
})

module.exports = router