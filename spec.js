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

  it('should do click on findplaces button', function(){
    browser.get('https://www.mapquest.com/');

    element(by.css('.icon-find-places.find')).click();
    element(by.css('icon-directions.directions')).click();


    var findPlaces = element(by.css())

    expect()


  })

})
