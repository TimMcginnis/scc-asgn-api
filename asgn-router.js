/**
 * asgn-router.js
 * Timothy McGinnis
 */

const router = require("express").Router();

router.get("/", function (req,res) {
    res.json({
        status: "API is working",
        message: "This is the assignment page!"
    });
});

router.route("/assignments")
    .get(controller.index)
    .post(controller.new);

router.route("/assignments/:assignment_id")
    .get(controller.view)
    .put(controller.update)
    .delete(contoller.delete);

module.exports = router;