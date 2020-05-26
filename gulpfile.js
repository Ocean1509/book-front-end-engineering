const gulp = require('gulp')
const babel = require("gulp-babel");
const rollup = require('gulp-rollup')
const replace = require("rollup-plugin-replace")
const clean = require('gulp-clean')

gulp.task('clean', () => {
  return gulp.src('dist/server', {
      read: false
    })
    .pipe(clean());
})




gulp.task('app', () => {
  return gulp.src('./src/server/app.js', './src/server/controllers/*')
    .pipe(babel({
      babelrc: false,// 默认用外部的babelrc文件，设置成false用内部的babel options
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist/server'))
})

gulp.task('api', () => {
  return gulp.src('./src/server/api/*')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist/server/api'))
})

gulp.task('controllers', () => {
  return gulp.src('./src/server/controllers/*')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist/server/controllers'))
})

// 开发环境不需要清洗
gulp.task('config', () => {
  return gulp.src('./src/server/config/*')
    .pipe(rollup({
      plugins: [
        replace({
          'process.env.NODE_ENV': JSON.stringify('production')
        })
      ],
      input: './src/server/config/index.js',
      output: {
        format: 'cjs'
      }
    }))
    .pipe(gulp.dest('dist/server/config'))
})

gulp.task('middleware', () => {
  return gulp.src('./src/server/middleware/*')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist/server/middleware'))
})


gulp.task('build-server', gulp.series(gulp.parallel(['app', 'api', 'controllers', 'config', 'middleware'])))