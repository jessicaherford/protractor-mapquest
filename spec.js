var origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function() {
  var args = arguments;

  // queue 100ms wait
  origFn.call(browser.driver.controlFlow(), function() {
    return protractor.promise.delayed(100);
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};


describe('mapquest usertest', function(){

  beforeEach(function() {
    browser.get('https://www.mapquest.com/');
  });

  it('should do click on findplaces button and fill out location value', function(){
    // browser.get('https://www.mapquest.com/');

    element(by.css('.icon-find-places.find')).click().then(function(){

      element(by.model('location.name')).sendKeys('Denver, CO');

      var locationDenver = element(by.model('location.name'));

      expect(locationDenver.getAttribute('value').then(function(value){
        console.log(value);
      })

    );

    //Need to add expect to equal hide = false
  });


  })

  it('should click on get directions button and fill out two addresses for directions', function(){
    // browser.get('https://www.mapquest.com/');

    element(by.css('.icon-directions.directions')).click().then(function(){

    var location1 = element(by.css('#input-directions-0')).sendKeys('Boulder, CO');
    var location2 = element(by.css('#input-directions-1')).sendKeys('Denver, CO');

    expect(location1.getAttribute('value').then(function(value){
      console.log(value);
    })
    );

    expect(location2.getAttribute('value').then(function(value){
    console.log(value);
    })
    );

    element(by.css(".get-directions.btn-block.btn-lg.text-center.directions-focus-cycle-2.highlight")).click()
    })
    })

})


// browser.takeScreenshot().then(function(png) {
// var stream = fs.createWriteStream("/tmp/screenshot.png");
// stream.write(new Buffer(png, 'base64'));
// stream.end();
