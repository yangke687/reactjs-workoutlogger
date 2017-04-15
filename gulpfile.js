var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify'); // Converts jsx to js
var source = require('vinyl-source-stream'); // Converts string to a stream
var connect = require('gulp-connect');

gulp.task('browserify', function() {
	browserify('./src/js/main.js')
		.transform('reactify')
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
	gulp.src('src/css/*.*')
		.pipe(gulp.dest('dist/css'));
	gulp.src('src/js/vendors/*.*')
		.pipe(gulp.dest('dist/js'));
});


gulp.task('server', function() {
	connect.server({
		root: 'dist',
		livereload: true,
		port: 4321
	});
});

gulp.task('default', ['browserify', 'copy', 'server'], function() {
	return gulp.watch('src/**/*.*', ['browserify', 'copy']);
});