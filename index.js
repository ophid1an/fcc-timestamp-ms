var strftime = require('strftime');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8000));

app.use(express.static(__dirname + '/public'));


app.get('/:id', function (req, res) {
  var date = new Date(
    isNaN(req.params.id)?
    req.params.id:
    (+req.params.id)*1000
  );

  var timeObj = {
    unix: null,
    natural: null
  };

  if (!isNaN(date.getTime())) {
    timeObj.unix = date.getTime()/1000;
    timeObj.natural = strftime('%B %d, %Y', date);
  }

  res.send(timeObj);
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
