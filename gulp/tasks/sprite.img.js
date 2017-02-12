'use strict';

module.exports = function() {
    $.gulp.task('sprite:img', function () {
        // Generate our spritesheet
        var stream = $.gulp.src('source/images/*.png')
            .pipe($.gp.spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.scss',
            cssFormat: 'scss',
            algorithm: 'binary-tree',
        }));

        // Pipe image
        stream.img
            .pipe($.gulp.dest($.config.root + '/assets/img/sprite'));

        // Pipe CSS
        stream.css
            .pipe($.gulp.dest('source/style/common'));

        // Return  stream
        return stream;
    });
};