var gulp = require("gulp");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var path = require("path");

// The main Sass method grabs all root svg Icons,
// minifies them and puts them together in one
// large svg sprite.
const svgicons = () => {
  return gulp
    .src("./src/icons/*.svg")
    .pipe(
      svgmin(function (file) {
        var prefix = path.basename(file.relative, path.extname(file.relative));
        return {
          plugins: [
            {
              name: "removeViewBox",
              // Disable a plugin by setting active to false.
              active: false,
            },
            {
              name: "cleanupIDs",
              // Add plugin options.
              params: {
                minify: true,
              },
            },
          ],
        };
      })
    )
    .pipe(svgstore())
    .pipe(gulp.dest("dist/icons"));
};

module.exports = svgicons;
