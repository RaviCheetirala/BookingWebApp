const express         = require('express')
      , path          = require('path')
      , http          = require('http')
      , https         = require('https')
      , cors          = require('cors')
      , proxy         = require('http-proxy-middleware')
      , bodyParser    = require('body-parser');



      

const app = express();
app.use(cors())
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'src/app/assets')));
app.use(express.static(path.join(__dirname, 'dist')));



router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


app.use('/api', router);


app.get('*', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

// Constants

const server = http.createServer(app);


var listener = server.listen(process.env.PORT || 8082, function() {
  console.log('listening on port ' + listener.address().port);
 });

