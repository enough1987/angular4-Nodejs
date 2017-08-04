


const router = require('express').Router();
const upload = require("../services/upload-service.js");


// https://gist.github.com/aitoribanez/8b2d38601f6916139f5754aae5bcc15f
router.post('/upload', upload.array("uploads[]", 12), (req, res)=> {

    try {

        console.log( ' upload ' );
        res.send(req.files);

    } catch (err) {
        res.json(err);
    }

});




module.exports = router;   