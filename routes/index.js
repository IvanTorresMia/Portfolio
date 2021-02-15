const db = require("../models")
const router = require("express").Router()


// getting all data from experience data base.
router.get("/api/Experience", (req, res) => {
    db.Experience.findAll({}).then(dbExperience => {
        res.json(dbExperience);
    }).catch(err => res.status(422).json(err))
});

module.exports = router;