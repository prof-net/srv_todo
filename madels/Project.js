const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true},
    type : [{type: Types.ObjectId, ref: 'Type'}],
    aim: [{type: Types.ObjectId, ref: 'Aim'}],
})

module.exports = model('Project', schema)