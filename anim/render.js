var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
  console.log('PHNTMjs: ' + msg);
};

page.onLoadFinished = function(status) {
  var frames = JSON.stringify({
    title: 123
  }, null, 2);
};

page.viewportSize = { width: 400, height: 400 };

page.open('http://127.0.0.1:8888/', function(status) {
  if(status === "success") {
    console.log('Status: ' + status);
    console.log(JSON.stringify({x:5,y:6}));
    page.render('example.png');
  }
  phantom.exit();
});
