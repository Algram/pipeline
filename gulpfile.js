var gulp  = require('gulp');
var folders = require('gulp-folders');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
var path = require('path');

gulp.task('sometask', function() {
  console.log('hello');
});

gulp.task('task', folders('base', function(folder){
  //This will loop over all folders inside pathToFolder main, secondary
  //Return stream so gulp-folders can concatenate all of them
  //so you still can use safely use gulp multitasking
  console.log(folder);

  return gulp.src(path.join('base', folder, '*.jpg'))
    .pipe(changed(path.join('processed', folder)))
    .pipe(imageResize({
      width : folder.split('x')[0],
      height : folder.split('x')[1],
      crop : true,
      imageMagick: true
    }))
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(path.join('processed', folder)));
}));

gulp.task('watch', function() {
  gulp.watch('base/**/*.jpg', ['task']);
});
