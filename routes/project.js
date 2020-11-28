const {Router} = require('express');
const router = Router()
const Project = require('./../madels/Project')

router.post('/add_project', async (req, res) => {
    const {
        title,
        aim,
        type
    } = req.body;
    const project = new Project({title, aim, type})
    await project.save()
    return res.status(201).json({message: 'Новый проект создан'})
})

router.get('/get_projects', async (req, res) => {
    const projects = await Project.find();
    return res.status(201).json({projects})
})

router.delete('/del_project', async (req, res) => {
    const {title} = req.body;
    const projects = await Project.findOne({id: req.body._id});
    await projects.delete();
    return res.status(201).json({message: `Тип ${title} был удвлен`})
})

module.exports = router