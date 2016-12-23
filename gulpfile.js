var gulp = require('gulp');

var sass = require('gulp-sass');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');
var watch = require('gulp-watch');

gulp.task('scss', function () {
	return gulp.src('css/scss/*.scss')
	.pipe(sass())
	.pipe(prefix('last 2 version'))
	.pipe(gulp.dest('css/'));
});

// gulp.task('js', function () {
// 	return gulp.src('javascript/modules/*.js')
// 	.pipe(concat('main.js'))
// 	.pipe(gulp.dest('javascript/'))
// })

gulp.task('watch', function() {
	gulp.watch('css/scss/*.scss', ['scss']);
	gulp.watch('css/scss/partials/*.scss', ['scss']);
})



gulp.task('default', ['watch']);