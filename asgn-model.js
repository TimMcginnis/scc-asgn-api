/**
 * asgn-model.js
 * Timothy McGinnis
 */

let mongoose = require("mongoose");

var assignmentSchema = mongoose.Schema({
    courseName: String,
    assignmentName: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date
    }
})

var Assignment = module.exports = mongoose.model("assignment", assignmentSchema);
module.exports.get = function (callback, limit) {
    Assignment.find(callback).limit(limit);
}