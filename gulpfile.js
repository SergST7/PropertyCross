//https://github.com/gulpjs/gulp/blob/master/docs/API.md
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var minifyCss = require('gulp-minify-css');

// задача по умолчанию
gulp.task('default', function () {
    console.log('default task');
});

// просто объект с данными о путях
var CONFIG = {
    src: {
        html: "src/app/**/*.template.html",
        styles: ['bower_components/bootstrap/dist/css/bootstrap.min.css', 'src/assets/css/*.css' ],
        scripts: 'src/**/*.js',
        angular: ['bower_components/angular/angular.min.js','bower_components/angular-messages/angular-messages.min.js',
        'bower_components/angular-route/angular-route.min.js'],
        images: 'src/assets/img/*.gif'
    },
    build: {
        templates : 'build/app',
        css       : 'build/css',
        js        : 'build/js',
        images    : 'build/assets/img'
    }
};


// задача по сборке темплейтов
gulp.task('html', function () {
    return gulp.src(CONFIG.src.html)
        .pipe(gulp.dest(CONFIG.build.templates)); //взять темплейты из CONFIG.src.html и положить в папку CONFIG.build.templates

});

// задача по сборке карт
gulp.task('images', function () {
    return gulp.src(CONFIG.src.images)
        .pipe(gulp.dest(CONFIG.build.images));
 });


// задача по сборке стилей
gulp.task('styles', function () {
    return gulp.src(CONFIG.src.styles)
        .pipe(concat( 'style.css' ))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest( CONFIG.build.css ));
});


// задача по сборке скриптов
gulp.task('scripts', function () {
    return gulp.src(CONFIG.src.scripts)
        .pipe(concat('script.min.js'))
        .pipe(ngAnnotate({
            add: true
        }))
        .pipe(uglify({
           preserveComments: 'all'
         }))
        .pipe(gulp.dest(CONFIG.build.js));
});

// задача по сборке скриптов angular
gulp.task('scriptsAngular', function () {
    return gulp.src(CONFIG.src.angular)
        .pipe(concat('script.angular.js'))
        .pipe(gulp.dest(CONFIG.build.js));
});


// задача сборки проекта, до запуска build будут выполнены задачи из массива
gulp.task('build', [ 'html', 'styles', 'scripts', 'scriptsAngular', 'images' ], function () {
    console.log('builded!');
});