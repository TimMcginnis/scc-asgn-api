/**
 * asgn-controller.js
 * Timothy McGinnis
 */

const Assignment = require("./asgn-model.js");

exports.index = function (req, res) {
    Assignment.get(function (err, assignments) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Assignments retrieved successfully",
            data: assignments
        });
    });
}

//*
exports.new = function (req, res) {
    var assignment = new Assignment();
    assignment.courseName = req.body.courseName;
    assignment.assignmentName = req.body.assignmentName;
    assignment.dueDate = req.body.dueDate;
//
    assignment.save(function (err) {
        if (err) {
            res.json(err);
		}
		res.json({
            message: 'New Assignment Added',
            data: assignment
        });
    });
};

//
exports.view = function (req, res) {
    Assignment.findById(req.params.contact_id, function (err, assignment) {
        if (err) {
            res.send(err);
		}
        res.json({
            message: 'Pulling Up Assignments',
            data: assignment
        });
    });
};

//*
exports.update = function (req, res) {
	Assignment.findById(req.params.contact_id, function (err, assignment) {
        if (err) {
            res.send(err);
		}
		assignment.courseName = req.body.courseName;
        assignment.assignmentName = req.body.assignmentName;
        assignment.dueDate = req.body.dueDate;
//
        assignment.save(function (err) {
            if (err) {
                res.json(err);
			}
            res.json({
                message: 'Assignment Details Updated',
                data: assignment
            });
        });
    });
};

//*
exports.delete = function (req, res) {
    Assignment.remove({
        _id: req.params.contact_id
    }, function (err, assignment) {
        if (err) {
            res.send(err);
		}
		res.json(
			{
				status: "success",
				message: 'Assignment Deleted!'
			});
    });
};