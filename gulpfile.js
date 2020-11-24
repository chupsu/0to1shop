const {src, dest, watch, parallel, series} = require('gulp');
const scss          = require('gulp-sass');
const concat        = require('gulp-concat');
const autoprefixer  = require('gulp-autoprefixer');
const uglify        = require('gulp-uglify');
const del           = require('del');
const browserSync   = require('browser-sync').create();
const imagemin      = require('gulp-imagemin');

function styles(){
  return src('app/scss/style.scss')
  .pipe(scss({outputStyle: 'compressed'}))
  .pipe(concat('style.min.css'))
  .pipe(autoprefixer({
    overrideBrowserslist: ['last 10 versions'],
    grid: true
  }))
  .pipe(dest('app/css'))
  .pipe(browserSync.stream())
}
function scripts(){
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
    'node_modules/mixitup/dist/mixitup.js',
    'app/js/main.js'
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js'))
  .pipe(browserSync.stream())
}
function images(){
  return src('app/images/**/*.*')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
      plugins: [
        {removeViewBox: true},
        {cleanupIDs: false}
      ]
    })
  ]))
  .pipe(dest('dist/images'))
}
function watching(){
  watch(['app/scss/**/*scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/**/*.html']).on('change', browserSync.reload);
}
function browsersync(){
  browserSync.init({
    server: {baseDir: 'app/'},
    notify: false
    //online: false
  })
}
function cleanDist(){
  return del('dist')
}
function build(){
  return src([
    'app/**/*.html',
    'app/css/style.min.css',
    'app/js/main.min.js'
  ], {base: 'app'})
  .pipe(dest('dist'))
}

exports.styles       = styles;
exports.scripts      = scripts;
exports.watching     = watching;
exports.browsersync  = browsersync;
exports.cleanDist    = cleanDist;
exports.images       = images;
exports.build        = series(cleanDist, images, build);
exports.default      = parallel(styles, scripts, watching, browsersync);