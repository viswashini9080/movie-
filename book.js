const express = require("express");
const router = express.Router();
router.post("/", (req, res) => {
    res.json({
        message: "Ticket booked successfully",});
});

module.exports = router;
