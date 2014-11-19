'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('/');

  it('should automatically redirect to /Home when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/Home");
  });


  describe('Home', function() {

    beforeEach(function() {
      browser.get('#/Home');
    });


    it('should render Home when user navigates to /Home', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('wikiList', function() {

    beforeEach(function() {
      browser.get('#/wikiList');
    });


    it('should render wikiList when user navigates to /wikiList', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
