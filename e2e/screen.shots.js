// File stream
var fs = require('fs');

// Abstract writing screen shot to a file 
function writeScreenShot(data, filename) {
    var directory = './e2e/failures/';
    
      // Create directory to store files
      if(!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
      };
    
    var stream = fs.createWriteStream(directory + filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}

// After each failing test, take a screen shot
afterEach(function() {
  var passed = jasmine.getEnv().currentSpec.results().passed();

    if(!passed) {
      browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, 'e2e-fail.png');
      });
    }
  });
