const headers = require('./cors');

module.exports = (req, res) => {

  var randomize = function () {
    var directions = ['Up', 'Down', 'Left', 'Right']
    var direction = directions[Math.floor(Math.random() * 4)]
    return direction;
    }

    res.writeHead(200, headers);
    res.end(randomize());
    console.log(req.url)

};

