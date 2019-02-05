module.exports = function (app) {

    var path = require('path');

    //app.use(express.static(path.join(__dirname, 'dist')));

    // Install a "/ping" route that returns "pong"
  app.get('/ping', function (req, res) {
    res.send('pong');
  });


}
