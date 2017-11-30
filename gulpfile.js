var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require ('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.scss') // get all scss file in our project
        .pipe(sass()) // transform scss in css
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true }))
        .pipe(gulp.dest('app/css')) // Whera must be a result
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function() {
    return gulp.src([ // Get all nedest libraries
        'app/libs/jquery/dist/jquery.js', // Get jQuery
        'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js', // Get Magnific Popup
        'app/libs/bootstrap/dist/js/bootstrap.js',
        'app/js/main.js'
    ])
        .pipe(concat('libs.min.js')) // Collect them in one file(libs.min.js)
        .pipe(uglify()) // Squeeze in one file
        .pipe(gulp.dest('app/js')); // Unload in folder app/js
});

gulp.task('css-libs', ['sass'], function() {
    return gulp.src('app/css/libs.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
});

gulp.task('browser-sync', function() { //Creating new task
    browserSync({ // Perform browser Sync(reloading page)
        server: { //define servers options
            baseDir: 'app' // Directory for the server - app
        },
        notify: false // Disable notify
    });
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass', 'css-libs']); // watching for scss files
    gulp.watch('app/css/**/*.css', browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
})

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {
    
    var buildCss = gulp.src([
        'app/css/main.css',
        'app/css/libs.min.css'
    ])
        .pipe(gulp.dest('dist/css'))
    
    var buildFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
    
    var buildJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('dist/js'))
    
    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
    
});

gulp.task('clear', function() {
    return cache.clearAll();
});

gulp.task('default', ['watch']);