var gulp = require('gulp');
var clean = require('gulp-clean');
var replace = require('gulp-replace');
var vulcanize = require('gulp-vulcanize');
var crisper = require('gulp-crisper');
var connect = require('gulp-connect');
var shell = require('gulp-shell');
var minifyInline = require('gulp-minify-inline');

gulp.task('finish', ['build'], function() {
    return gulp.src(['dist/coffee-nearby.html', 'dist/coffee-favorite.html', 'dist/coffee-receipt.html'], { read: false })
        .pipe(clean())
        .pipe(gulp.dest('dist'));
});

gulp.task('build', function() {
    gulp.src('temp/*')
        .pipe(gulp.dest('dist'));

    gulp.src(['coffee-nearby.html', 'coffee-favorite.html', 'coffee-receipt.html'])
        .pipe(replace(/<link rel="import" href="../g, '<link rel="import" href="../bower_components'))
        .pipe(gulp.dest('dist'));
        
    return gulp.src('drink-coffee.html')
        .pipe(replace(/<link rel="import" href="../g, '<link rel="import" href="../bower_components'))
        .pipe(gulp.dest('dist'))
        .pipe(replace(/<script src="../g, '<script src="../bower_components'))
        .pipe(gulp.dest('dist'))
        .pipe(replace(/<link rel="import" href="..\/bower_componentsffee-/g, '<link rel="import" href="coffee-'))
        .pipe(gulp.dest('dist'))
        .pipe(vulcanize({
            inlineScripts: true,
            inlineCss: true,
            stripComments: true
        }))
        .pipe(minifyInline())
        .pipe(crisper())
        .pipe(gulp.dest('dist'));
});

gulp.task('serve', function() {
    connect.server({
        root: 'dist'
    });
});

gulp.task('default', ['serve', 'finish'], shell.task([
    /^win/.test(require('os').platform()) ? 'start http://localhost:8080/' : 'open http://localhost:8080/'
]));
