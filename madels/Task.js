const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true},
    percent: {type: Number},
    planned_time: {type: Number},
    actual_time: {type: String},
    date_start: {type: Date},
    date_end: {type: Date},
    count : {type: Number},
    project: [{type: Types.ObjectId, ref: 'Project'}],
})

module.exports = model('Task', schema)