var gulp  = require('gulp');
var folders = require('gulp-folders');
var path = require('path');
var pathToFolder = 'base';

gulp.task('sometask', function() {
  console.log('hello');
});

gulp.task('task', folders(pathToFolder, function(folder){
	//This will loop over all folders inside pathToFolder main, secondary
	//Return stream so gulp-folders can concatenate all of them
	//so you still can use safely use gulp multitasking

  return gulp.src(path.join(pathToFolder, folder, '*.jpg'))
		.pipe(console.log(folder + '.jpg'));
}));

gulp.task('watch', function() {
  gulp.watch('base/**/*.jpg', ['task']);
});
