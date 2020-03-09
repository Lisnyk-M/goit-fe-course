const gulp = require('gulp');
const svgSprite = require('svg-sprite');
const paths = require('../paths');
const plumber = require('gulp-plumber');
// const newer = require('gulp-newer');


config = {
    "mode": {
        "symbol": true
    }
};


const svg_sprite = () => {
    return gulp
        .src(paths.src.images + '/sprite')
        // .src('src/images/sprite')
        // .pipe(newer(paths.build.images))
        .pipe(plumber())
        .pipe(svgSprite(config))
        // .pipe(gulp.dest(paths.build.images));
        // .pipe(gulp.dest('build/images/sprite'));
        // .src('src/images/sprite/*.svg')
        // .pipe(svgstore({ inlineSvg: true }))
        // .pipe(rename('sprite.svg'))
        .pipe(gulp.dest('build/images'));
};

module.exports = svg_sprite;

