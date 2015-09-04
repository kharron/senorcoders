'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = function() {
  setTimeout(browserSync.reload.bind(browserSync), 150);
};
// var imagemin = require('gulp-imagemin');
// var pngquant = require('imagemin-pngquant');

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

var AUTOPREFIXER_CONSERVATIVE = [
  '> 0.5%', 'last 10 versions', 'Firefox ESR', 'Opera 12.1'
];

// CSS task
gulp.task('css', function() {
  gulp.src('less/main.less')
    .pipe($.sourcemaps.init())
    .pipe($.less()).on('error', console.error.bind(console))
    .pipe($.autoprefixer({
      browsers: AUTOPREFIXER_BROWSERS
    }))
    .pipe($.sourcemaps.write())
    //    .pipe($.csso())
    .pipe(gulp.dest('css/')).on('error', console.error.bind(console));
});

// JS tasks
// gulp.task('js-min', function() {
//  gulp.src([
//      'js/modules/*.js'
//    ])
   // .pipe($.concat('main.js'))
   //    .pipe($.uglify({
   //      preserveComments: 'some'
   //    }))
//    .on('error', console.error.bind(console))
//    .pipe(gulp.dest('js/'));
// });

gulp.task('js-vendor', function() {
  gulp.src([
      'js/vendor/jquery.min.js',
      'js/vendor/bootstrap/*.js'
    ])
    .pipe($.concat('vendor.min.js'))
    .pipe($.uglify({
      preserveComments: 'some'
    }))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('js/'));
});

// Run tasks
gulp.task('build', ['css', 'js-vendor']);

gulp.task('default', ['css', 'js-vendor'], function() {
  browserSync({
    notify: false,
    server: ''
  });

  gulp.watch(['**/*.html'], reload);
  gulp.watch(['less/**/*.less'], ['css']).on('change', reload);
  gulp.watch(['js/vendor/**/*.js'], ['js-vendor']).on('change', reload);
  gulp.watch(['js/*.js']).on('change', reload);
  //gulp.watch(['images/**/*'], ['minify-imgs']).on('change', reload);

});

// Handle the error
function errorHandler(error) {
  console.log(error.toString());
  this.emit('end');
}
