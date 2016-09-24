
var gulp = require('gulp');
var sass = require('gulp-sass');







// accesss gulp 
gulp.task('sass', function(){
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});





// Watch Files For Changes
 gulp.task('watch', function() {
 	gulp.watch(['scss/*.scss', 'scss/**/*.scss'], ['sass']);
 });

// Default Task
gulp.task('default', ['sass', 'watch']);







