'use strict';

var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-ruby-sass'),
    prefix = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload');


// Compile and prefix our Sass
gulp.task('styles', function() {
    return gulp.src('css/scss/main.scss')
        .pipe(sass({style: 'compressed'}))
        .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
        .pipe(gulp.dest('css'));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src(['js/plugins.js', 'js/scripts.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});


// Watch Files For Changes
gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch('css/scss/**/*.scss', ['styles']);

    gulp.watch('js/**/*.js', ['scripts']);

    // Create LiveReload server
    var server = livereload();

    // Watch any files in dist/, reload on change
    gulp.watch(['**/*/*.*']).on('change', function(file) {
        server.changed(file.path);
    });

});

// Default Task
gulp.task('default', ['watch']);

// Built Task
gulp.task('build', ['styles', 'scripts']);
