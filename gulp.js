var gulp = require('gulp');
var gutil = require('gulp-util');
var sh = require('shelljs');
var replace = require('gulp-replace');
var template = require('./src/app/components/ekyte/common/ScaffoldGenerator');
var concat = require('gulp-concat');
var less = require('gulp-less');

// Altera url de API para Desenvolvimento
gulp.task('dev', function () {
    gulp.src(['./src/app/config/config.js'])
        .pipe(replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, function (match, p1, offset, string) {
            return match.endsWith("/api") ? "http://localhost:3000/api" : "http://localhost:3000";
        }))
        .pipe(gulp.dest('./src/app/config/'));
});

// Altera url de API para Produção
gulp.task('production', function () {
    gulp.src(['./src/app/config/config.js'])
        .pipe(replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, function (match, p1, offset, string) {
            return match.endsWith("/api") ? "https://teste.com/api" : "https://teste.com";
        }))
        .pipe(gulp.dest('./src/app/config/'));
});

// Executa servidor de desenvolvimento
gulp.task('run-app', function (eb) {
    sh.exec("npm run dev", function (code, stdout, stderr) {
        console.log(stdout);
    })
    gulp.watch('./src/assets/css/less/**/*.less', ['less']);	    
});

// Executa servidor com base no parametro passado
// utilizar parametro --env
gulp.task('run', function (eb) {
    sh.exec("gulp " + (gutil.env.env ? gutil.env.env : 'dev'), function (code, stdout, stderr) {
        if (code == 0) {
            sh.exec("gulp run-app");
        }
    });

});