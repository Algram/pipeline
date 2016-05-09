var gulp  = require('gulp');
var folders = require('gulp-folders');
var imagemin = require('gulp-imagemin');
var path = require('path');
var pathToFolder = 'base';

gulp.task('sometask', function() {
  console.log('hello');
});

gulp.task('task', folders(pathToFolder, function(folder){
  //This will loop over all folders inside pathToFolder main, secondary
  //Return stream so gulp-folders can concatenate all of them
  //so you still can use safely use gulp multitasking
  console.log(folder);

  return gulp.src(path.join(pathToFolder, folder, '*.jpg'))
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('build/img'));
}));

gulp.task('watch', function() {
  gulp.watch('base/**/*.jpg', ['task']);
});
