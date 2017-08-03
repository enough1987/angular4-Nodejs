let multer = require("multer");

let storage = multer.diskStorage({

  destination: function (req, file, cb) {
    console.log( req );
    if ( ! file.mimetype.match(/.(jpg|jpeg|png|gif)$/i) ) {
        console.log( " file is not image ", file.mimetype );
        return;
    }  
    cb(null, './public/uploads/')
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }

});

let upload = multer({ storage: storage });




module.exports = upload; 