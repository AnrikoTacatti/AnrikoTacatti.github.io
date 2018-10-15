var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var spritesmith = require('gulp.spritesmith');
var rimraf = require('rimraf');
var rename = require("gulp-rename");
var uglify = require("gulp-uglifyjs");
var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");


/*-------------js---------------------------*/
gulp.task('js', function() {
    return gulp.src([
        'source/js/main.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    //.pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
    
});
/*-------------server---------------------------*/
gulp.task('server', function() {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "build"
        }
    });

 gulp.watch('build/**/*').on('change', browserSync.reload);
});


/*-------------pug compile---------------------------*/
gulp.task('templates:compile', function buildHTML() {
  return gulp.src('source/template/index.pug').pipe(pug({
    pretty:true
  }))
  .pipe(gulp.dest('build'))
});

/*-------------styles compile---------------------------*/
gulp.task('styles:compile', function () {
  return gulp.src('source/styles/main.scss')
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 4 versions'],cascade: false}))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('build/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

/*-------------sprite ---------------------------*/
gulp.task('sprite', function (cb) {
  var spriteData = gulp.src('sorse/images/icons/*.png').pipe(spritesmith({
      
    imgName: 'sprite.png',
    imgPath: '../images/sprite.png',
    cssName: 'sprite.scss'
  }));
    
    spriteData.img.pipe(gulp.dest('build/images/'));
    spriteData.css.pipe(gulp.dest('source/styles/global/'));
    cb();
});




 /*-------------clean ---------------------------*/
gulp.task('clean', function del(cb) {
return rimraf('build',cb);
});



/* ------------ Copy fonts------------- */

gulp.task('copy:fonts', function () {
    return gulp.src('source/fonts/*.*').pipe(gulp.dest('build/fonts'));
});


/* ------------ Copy images------------- */

gulp.task('copy:images', function () {
    return gulp.src('source/images/*.*').pipe(gulp.dest('build/images'));
});




/* ------------ Copy ---------------- */
gulp.task('copy', gulp.parallel('copy:fonts', 'copy:images'));




/* ------------ Watchers ------------- */

gulp.task('watch', function () {
    gulp.watch('source/template/**/*.pug', gulp.series('templates:compile'));
    gulp.watch('source/styles/**/*.scss', gulp.series('styles:compile'));
    gulp.watch('source/js/**/*.js', gulp.series('js'));
});
gulp.task('default', gulp.series('clean', gulp.parallel('templates:compile', 'styles:compile','js', 'sprite', 'copy'), gulp.parallel('watch', 'server')));
