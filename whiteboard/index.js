
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

// generate a random ID
// need cookieParser middleware before we can do anything with cookies
app.use(express.cookieParser());

app.use(function (req, res, next) {
  // check if client sent cookie
  var cookie = req.cookies.sessid;
  if (cookie === undefined)
  {
    var myid = process.env.HOSTNAME;
    // no: set a new cookie
    // var randomNumber=Math.random().toString();

    // randomNumber=randomNumber.substring(2,randomNumber.length);
    res.cookie('sessid', myid, { maxAge: 900000, httpOnly: true });
    console.log('cookie created successfully');
  }
  else
  {
    // yes, cookie was already present
    console.log('cookie exists', cookie);
  }
  next(); // <-- important!
});



app.use(express.static(__dirname + '/public'));

function onConnection(socket){
  socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
}

io.on('connection', onConnection);

http.listen(port, () => console.log('listening on port ' + port));
