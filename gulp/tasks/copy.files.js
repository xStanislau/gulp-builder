'use strict';

module.exports = function() {
    $.gulp.task('copy:files', function() {
        return $.gulp.src('./source/fonts/**/*.*')
            .pipe($.gulp.dest($.config.root + '/assets/fonts'));

    });
};