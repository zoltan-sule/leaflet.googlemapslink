"use strict";

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const cssnano = require('gulp-cssnano');
const gulp = require('gulp');
const minify = require('gulp-minify');
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require('gulp-sass');

// CSS task
/*
function css1() {
    return (gulp
        .src('src/scss/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'))
    );
}
*/

function css2() {
    return gulp
        .src("./src/scss/*.scss")
        .pipe(plumber())
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(gulp.dest("./dist/css/"))
        .pipe(rename({ suffix: ".min" }))
        //.pipe(postcss([autoprefixer, cssnano]))
        .pipe(gulp.dest("./dist/css/"));
}

// JS task

function js() {
    return (gulp
        .src('src/js/Control.GoogleMapsLink.js')
        //.pipe(concat('all.js'))
        //.pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
    );
}


// export tasks
exports.css = css2;
exports.js = js;
