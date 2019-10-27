const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
var tinypng = require('gulp-tinypng-compress');
 
gulp.task('tinypng', function () {
    gulp.src('img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'PDrQ8G7cGFv5N1mdV17DgDQYTR7HB7cy',
        }))
        .pipe(gulp.dest('images'));
});

function style() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css/"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
}
exports.style = style;
exports.watch = watch;