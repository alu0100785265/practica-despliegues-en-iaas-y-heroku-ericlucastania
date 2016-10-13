//GULP
var gulp  = require('gulp');
var shell = require('gulp-shell');
var git = require('gulp-git');
 
var paths = {
  
   scripts: [
     './scripts.js/**'
   ],
   
   
   html: [
   './gh-pages/index.html'
   ],
   
   book: [
   './txt/*.md'
   ],
   
   bookjson: [
   './book.json'
   ]
   
};
gulp.task('deploy',shell.task([
  'npm run deploy'
]));



gulp.task('add', function() {
  console.log('adding...');
  return gulp.src('.')
    .pipe(git.add());
});

gulp.task('commit', function() {
  console.log('commiting');
  if (argv.m) {
    return gulp.src('.')
      .pipe(git.commit(argv.m));
  }
});

gulp.task('push', function(){
  console.log('pushing...');
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});

gulp.task('gitsend', function() {
  runSequence('add', 'commit', 'push');
});


gulp.task('build',shell.task([
  'npm run build'
]));


gulp.task('all',shell.task([
  './scripts/losh generate-gitbook && generate-wiki && deploy-gitbook && deploy-wiki'
]));


gulp.task('inst',shell.task([
  'gitbook install'
]));

gulp.task('iaas',shell.task([
    './scripts/ssh']));

gulp.task('watch', function(){
   gulp.watch(paths.book,['deploy']);
   gulp.watch(paths.bookjson,['inst']);
  
});

gulp.task('default', ['watch']);