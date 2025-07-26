const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');

function scripts () {
    return gulp.src('./src/scripts/*.js') 
    .pipe (uglify())
    .pipe(gulp.dest('./dist/js'))
}

function styles () {
    return gulp.src('./src/styles/main.scss') // apenas este
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

function images () {
    return gulp.src ('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function serve() {
    browserSync.init({
        server: {
            baseDir: './' // pasta onde está seu index.html
        }
    });

    gulp.watch('./src/styles/*.scss', styles);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./src/styles/*.js', gulp.parallel(scripts)); // fazer minificaçao do arquivo
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = serve;
