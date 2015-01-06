'use strict';

var MainPage = function() {
 
  this.jumbEl = element(by.css('.jumbotron'));

  this.h1El = this.jumbEl.element(by.css('h1'));
  this.h2El = this.jumbEl.element(by.css('h2'));
};

module.exports = new MainPage();
