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

  it('should do click on findplaces button and fill out location value', function(){
    browser.get('https://www.mapquest.com/');

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

})
