const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const beautify = require('gulp-cssbeautify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const livereload = require('gulp-livereload');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

const files = {
    scssSrc: 'source/scss/**/*.scss',
    cssDest: 'public/css',
    reponsiveSrc: 'source/scss/responsive.scss',
    reponsiveDest: 'public/css/',
    jsSrc: 'source/js/*.js',
    jsDest: 'public/js/',
    imgSrc: 'source/images/*',
    imgDest: 'public/images'
}

// Error message
var onError = function(err) {
    notify.onError({
        title: 'Gulp',
        subtitle: 'Failure!',
        message: 'Error: < %= error.message %>',
        sound: 'Beep'
    })(err);

    this.emit('end');
};
// ---------complie images
function images() {
    return src(files.imgSrc)
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 7 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(livereload())
        .pipe(dest(files.imgDest));
}
// -------------js task
function jsTask() {
    return src(files.jsSrc, { sourcemaps: true })
        .pipe(concat('myscript.js'))
        .pipe(dest(files.jsDest), { sourcemaps: true })
        .pipe(livereload());
}
// -----------sass task
function scssTask() {
    return src(files.scssSrc)
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass().on('error', sass.logError))
        .pipe(beautify())
        .pipe(dest(files.cssDest))
        .pipe(livereload())
        .pipe(browserSync.stream());
}
// --------------- responsive
function reponsiveTask() {
    return src(files.reponsiveSrc)
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(beautify())
        .pipe(dest(files.reponsiveDest))
        .pipe(livereload())
        .pipe(browserSync.stream());
}
// ----------watch
function watchTask() {
    browserSync.init({
        server: {
            baseDir: ["./public"]
        },
        open: true,
        ghostMode: {
            clicks: false,
            scroll: false,
            forms: {
                submit: false,
                inputs: false,
                toggles: true
            }
        },
        watch: true,
    });
    livereload.listen();
    watch([files.scssSrc], scssTask); //css
    watch([files.reponsiveSrc], reponsiveTask); // responsive
    watch([files.jsSrc], jsTask); // js
    watch([files.imgSrc], images); // images
    watch(['./public/*.html']).on('change', browserSync.reload);
}
exports.watchTask = watchTask;
const build       = watchTask;
exports.build     = build;
