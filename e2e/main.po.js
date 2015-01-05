'use strict';

var MainPage = function() {
 
  this.jumbEl = element(by.css('.jumbotron'));

  this.h1El = this.jumbEl.element(by.css('h1'));
  this.h2El = this.jumbEl.element(by.css('h2'))
  this.imgEl = this.jumbEl.element(by.css('img'));
  this.thumbnailEls = element(by.css('body')).all(by.repeater('awesomeThing in awesomeThings'));
};

module.exports = new MainPage();
