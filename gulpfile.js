var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var gutil = require( 'gulp-util' );
const babel = require('gulp-babel');

gulp.task('default', function() {

});

gulp.task('scss', function(){

    var processors = [
        autoprefixer({browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']}),
    ];


    return gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
        stream:true
    }))
});

gulp.task('browser-sync', function(){
    browserSync.init({
        server:{
            baseDir: "./"
        }
    })
})

gulp.task('watch', ['browser-sync', 'scss', 'babel'], function(){
    // refresh.listen()
    gulp.watch(['./**/*.scss'], ['scss'])
    gulp.watch("*.html").on("change", reload)
    gulp.watch(['./js/src/*.js'], ['babel']).on('change', reload)
})

gulp.task('babel', () => {
    return gulp.src('./js/src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./js'));
});
