


let express = require('express');
let multer = require("multer");
//let formidable = require('formidable');

let router = express.Router();

console.log(" PURCHASES ");

let storage = multer.diskStorage({
  // destino del fichero
  destination: function (req, file, cb) {
    console.log( file );
    if ( ! file.mimetype.match(/.(jpg|jpeg|png|gif)$/i) ) {
        console.log( " file is not image ", file.mimetype );
        return;
    }  
    cb(null, './public/uploads/')
  },
  // renombrar fichero
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

let upload = multer({ storage: storage });


router.post('/api/purchases/upload', multer({ dest: "./public/uploads/" }).array("uploads", 12), function (req, res, next) {

    try {

        console.log(' ====> files', req.files);
        res.send(req.files);

    } catch (err) {
        res.json(err);
    }

});

router.all('/*', upload.array("uploads[]", 12), function (req, res) {

    try {

        console.log('files', req.files);
        res.send(req.files);

    } catch (err) {
        res.json(err);
    }

    //res.json("{ 'err' : 'Not Found fron purchases' }");
});

module.exports = router;   