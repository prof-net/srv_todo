const {Router} = require('express');
const router = Router()
const Type = require('./../madels/Type')

router.post('/add_type', async (req, res) => {
    const {
        title,
    } = req.body;
    const type = new Type({title})
    await type.save()
    return res.status(201).json({message: 'Новый тип записан'})
})

router.get('/get_types', async (req, res) => {
    const types = await Type.find();
    return res.status(201).json({types})
})

router.delete('/del_type', async (req, res) => {
    const {title} = req.body;
    const types = await Type.findOne({id: req.body._id});
    await types.delete();
    return res.status(201).json({message: `Тип ${title} был удвлен`})
})

module.exports = router