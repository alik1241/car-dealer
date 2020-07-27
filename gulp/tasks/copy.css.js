// задача - копирование файлов css из папки исходников в итоговую папку

'use strict';

module.exports = function() {
  $.gulp.task('copy:css', function() {
    return $.gulp.src('./source/style/**/*.*', { since: $.gulp.lastRun('copy:css') })
      .pipe($.gulp.dest($.config.root + '/css'));
  });
};