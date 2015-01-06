'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var browserSync = require('browser-sync');

// Downloads the selenium webdriver
gulp.task('webdriver-update', $.protractor.webdriver_update);

gulp.task('webdriver-standalone', $.protractor.webdriver_standalone);

function runProtractor (done) {
  var testFiles = [
    'test/e2e/**/*.js'
  ];

  gulp.src(testFiles)
    .pipe($.protractor.protractor({
      configFile: 'protractor.conf.js',
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      this.emit('end');
      //throw err;
    })
    .on('end', function () {
      // Close browser sync server
      browserSync.exit();
      done();
    });
}

gulp.task('pro', ['pro:src']);
gulp.task('pro:all', ['serve:pro', 'watch:e2e', 'webdriver-update'], function(){
  var watchFiles = [
    'e2e/**/*.js',
    'src/{app,components}/**/*.js',
    'src/{app,components}/**/*.html'
  ],
  testFiles = 'e2e/**/*.js',
  TEST = function(){
    gulp.src(testFiles)
      .pipe($.protractor.protractor({
        configFile: 'protractor.conf.js',
      }))
      .on('error', function (err) {
        // Make sure failed tests cause gulp to exit non-zero
        this.emit('end');
      })
      .on('end', function () {
      });
  };
  gulp.watch(watchFiles, TEST);
  TEST();
});
gulp.task('pro:src', ['serve:e2e', 'watch', 'webdriver-update'], runProtractor);
gulp.task('pro:dist', ['serve:e2e-dist', 'webdriver-update'], runProtractor);

