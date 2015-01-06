'use strict';

var gulp = require('gulp');

gulp.task('watch', ['wiredep', 'injector:css', 'injector:js'] ,function () {
  gulp.watch('src/{app,components}/**/*.scss', ['injector:css']);
  gulp.watch('src/{app,components}/**/*.js', ['test', 'pro', 'injector:js']);
  gulp.watch('e2e/**/*.js', ['pro', 'injector:js']);
  gulp.watch('src/assets/images/**/*', ['images']);
  gulp.watch('bower.json', ['wiredep']);
});

gulp.task('watch:e2e', ['wiredep', 'injector:css', 'injector:js'] ,function () {
  gulp.watch('src/{app,components}/**/*.scss', ['injector:css']);
  gulp.watch('src/{app,components}/**/*.js', ['test', 'injector:js']);
  gulp.watch('src/assets/images/**/*', ['images']);
  gulp.watch('bower.json', ['wiredep']);
});

