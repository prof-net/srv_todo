const {Router} = require('express');
const router = Router()
const Aim = require('./../madels/Aim')

router.post('/add_aim', async (req, res) => {
    const {
        title,
        } = req.body;
    const aim = new Aim({title})
    await aim.save()
    return res.status(201).json({message: 'Новая цель записана'})
})

router.get('/get_aims', async (req, res) => {
    const aims = await Aim.find();
    return res.status(201).json({aims})
})

router.delete('/del_aim', async (req, res) => {
    const {title} = req.body;

    const aims = await Aim.findOne({id: req.body._id});
    await aims.delete();
    return res.status(201).json({message: `Цель ${title} была удвлена`})
})

module.exports = router