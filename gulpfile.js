const gulp = require("gulp");

// html plugins
const pugPlugin = require("gulp-pug");
// css plugins
const sassPlugin = require("gulp-sass")(require("sass"));
const postcssPlugin = require("gulp-postcss");
const cssnanoPlugin = require("gulp-cssnano");
// js plugins
const bablePlugin = require("gulp-babel");
const uglifyPlugin = require("gulp-uglify");
// webp plugins
const webpPlugin = require("gulp-webp");
// server
const liveServerPlugin = require("gulp-live-server");
const livereloadPlugin = require("gulp-livereload");
// other plugins
const sourcemapsPlugin = require("gulp-sourcemaps");
const concatPlugin = require("gulp-concat");
// paths
const PATH = {
  html: {
    src: "./src/views/*.pug",
    watch: "./src/views/",
    dist: "dist/",
  },
  css: {
    src: "./src/assets/scss/main.scss",
    watch: "./src/assets/scss/",
    dist: "dist/css",
  },
  js: {
    src: "./src/assets/js/*.js",
    watch: "./src/assets/js/",
    dist: "dist/js",
  },
  img: {
    src: "./src/assets/images/*.*",
    watch: "./src/assets/images/",
    dist: "dist/images",
  },
};

// html function
function html() {
  return gulp
    .src(PATH.html.src)
    .pipe(
      pugPlugin({
        pretty: true,
      })
    )
    .pipe(gulp.dest(PATH.html.dist))
    .pipe(livereloadPlugin());
}
// css function
function css() {
  return gulp
    .src(PATH.css.src)
    .pipe(sourcemapsPlugin.init()) // init the map plugin
    .pipe(sassPlugin())
    .pipe(postcssPlugin())
    .pipe(cssnanoPlugin()) // minify file
    .pipe(concatPlugin("main.min.css")) // change file name
    .pipe(sourcemapsPlugin.write(".")) // add the map file at the same folder
    .pipe(gulp.dest(PATH.css.dist))
    .pipe(livereloadPlugin());
}
// js function
function js() {
  return gulp
    .src(PATH.js.src)
    .pipe(concatPlugin("main.js"))
    .pipe(bablePlugin())
    .pipe(uglifyPlugin()) // now gulp-uglify works
    .pipe(gulp.dest(PATH.js.dist))
    .pipe(livereloadPlugin());
}
// image function
function img() {
  return gulp
    .src(PATH.img.src)
    .pipe(webpPlugin())
    .pipe(gulp.dest(PATH.img.dist))
    .pipe(livereloadPlugin());
}
// server function
function server() {
  let server = liveServerPlugin.static(PATH.html.dist);
  server.start();
}

function watch() {
  server();
  livereloadPlugin.listen({ port: 3300 });
  gulp.watch(PATH.html.watch, html);
  gulp.watch(PATH.css.watch, css);
  gulp.watch(PATH.js.watch, js);
  gulp.watch(PATH.img.watch, img);
}
exports.html = html;
exports.css = css;
exports.js = js;
exports.img = img;
exports.server = server;
exports.watch = watch;
