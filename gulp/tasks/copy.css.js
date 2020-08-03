'use strict';

module.exports = function() {
  $.gulp.task('copy:css', function() {
    // для карусели берем и картинки тоже
    return $.gulp.src(['./source/style/**/*.css', './source/style/**/*.png', './source/style/**/*.gif'], {
      since: $.gulp.lastRun('copy:css')
    })
      .pipe($.gulp.dest($.config.root + '/css'));
  });
};