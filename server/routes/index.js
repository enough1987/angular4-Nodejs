var express = require('express');

var router = express.Router();


//const baseurl = 'http://52.58.162.133:3000'; // "http://localhost/:3000";
const redirectUrl = 'http://localhost:4200/payout/payout'; 
const PAYPAl_Client_ID = "ASZol-Q4dHOyz8WpmHLowulhTToPfhOxuNFxPVUdl1JRuFKK7INxOy4jYZPwGoObignBTpaqXx89XKGF"; // sanbox
const PAYPAl_Client_SECRET = "EMcD8ACKvxLKeJmk683j-Dcpr_AmuL7hmwM3LGKH3qEsGOyV5NM0iN7qPV1mupFVk0xsd_AcKy24Nw_z"; // sandbox
const paypalMode = "sandbox"; 


const configureOpenid = (paypal) => {
  console.log(' <- config config config ->');
  paypal.configure({
    'mode': paypalMode,
    'openid_client_id': PAYPAl_Client_ID,
    'openid_client_secret': PAYPAl_Client_SECRET,
    'openid_redirect_uri': redirectUrl 
  });
};


console.log( " PAYPAL -------> " );


// step 1
router.post('/api/paypal/authorizeUrl', function (req, res, next) {
  try {

    const paypal = require('paypal-rest-sdk');
    configureOpenid(paypal);
    const openIdConnect = paypal.openIdConnect;
    const authorizeUrl = openIdConnect.authorizeUrl({ 'scope': 'openid profile email https://uri.paypal.com/services/expresscheckout' });
    console.log( authorizeUrl );
    res.json({ authorizeUrl: authorizeUrl });

  } catch (err) {
    res.json(err);
  }
});


// step 2
router.post('/api/paypal/tokeninfoCreate', function (req, res, next) {
  try { 
    
    console.log( req.body.code );
    const paypal = require('paypal-rest-sdk');
    configureOpenid(paypal);
    const openIdConnect = paypal.openIdConnect;
    openIdConnect.tokeninfo.create(req.body.code, function (error, tokeninfo) {
      if (error) {
        console.log('1');
        res.json(error);
      } else {
        openIdConnect.userinfo.get(tokeninfo.access_token, function (error, userinfo) {
          if (error) {
            console.log('2')
            res.json(error);
          } else {
            res.json({ tokeninfo: tokeninfo, userinfo: userinfo });
          }
        });
      }
    });

  } catch (err) {
    res.json(err);
  }
});


router.post('/api/paypal/payout', function (req, res, next) {
  try {

    const paypal = require('paypal-rest-sdk');
    paypal.configure({
      'mode': paypalMode, //sandbox or live
      "client_id": PAYPAl_Client_ID,  // your paypal application client id
      "client_secret": PAYPAl_Client_SECRET // your paypal application secret id
    });
    var sender_batch_id = Math.random().toString(36).substring(9);
    var create_payout_json = {
      "sender_batch_header": {
        "sender_batch_id": sender_batch_id,
        "email_subject": "You have a payout"
      },
      "items": [
        {
          "recipient_type": "EMAIL",
          "amount": {
            "value": req.body.amount,
            "currency": "USD"  // req.body.currency || "USD"
          },
          "note": "Thank you",
          "sender_item_id": + new Date,
          "receiver": req.body.email || 'tilgaaleksandr-facilitator@gmail.com'
        }
      ]
    };
    paypal.payout.create(create_payout_json, function (error, payout) {
      if (error) {
        res.json(error.response);
      } else {
        res.json(payout);
      }
    });

  } catch (err) {
    res.json(err);
  }
});



router.all('/*', function (req, res) {
  res.json("{ 'err' : 'Not Found' }");
});


module.exports = router;
