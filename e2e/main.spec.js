'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
    page = require('./main.po');
  });

  it('should include reference to Ebury and EBO', function() {
    expect(page.h1El.getText()).toBe('Ebury | EBO');
    expect(page.h2El.getText()).toContain('Angular');
  });

});

