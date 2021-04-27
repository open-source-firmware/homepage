const { dest, src } = require("gulp");
const minify = require("gulp-minify");

const jscompress = () => {
  return src("./src/scripts/*.js").pipe(minify()).pipe(dest("./dist/scripts"));
};

module.exports = jscompress;
