var gulp = require('gulp'); // Подключаем Gulp
var sass = require('gulp-sass'); // Подключаем Sass пакет
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var autopolyfiller = require('gulp-autopolyfiller');

gulp.task('sass', () => { // Создаем таск "sass"
  return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) // Берем источник
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(gulp.dest('css/')) // Выгружаем результата в папку css
});

gulp.task('watch', () => {
    gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']); // Наблюдение за sass файлами в папке sass
});

gulp.task('bs', () => {
  	browserSync({
 		server: {
 			baseDir: './'
 		},
  	})
});
 
gulp.task('autoprefixer', () =>
    gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
	.pipe(gulp.dest('css'))
);
 
gulp.task('minify', () => {
    return gulp.src('css/style.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('css'));
});

 
gulp.task('imagemin', () =>
    gulp.src('img/*')
        .pipe(imagemin([
    		imagemin.gifsicle({interlaced: true}),
    		imagemin.jpegtran({progressive: true}),
    		imagemin.optipng({optimizationLevel: 5}),
    		imagemin.svgo({
		        plugins: [
		            {removeViewBox: true},
		            {cleanupIDs: false}
		        ]
    		})
		]))
        .pipe(gulp.dest('img'))
);


gulp.task('polyfill', () => {
    return gulp.src('js/scripts.js')
        .pipe(autopolyfiller('result_polyfill_file.js'))
        .pipe(gulp.dest('js'));
});


gulp.task('default', ['watch']);
