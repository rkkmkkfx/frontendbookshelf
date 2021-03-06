import gulp from 'gulp';
import gutil from 'gulp-util';
import plumber from 'gulp-plumber';
import webpackStream from 'webpack-stream';
import uglify from 'gulp-uglify';
import PATHS from '../paths';
import getPluginOptions from '../plugins-options';

const isProduction = process.env.NODE_ENV === 'production';

gulp.task('scripts', () => {
	return gulp
		.src(`${PATHS.source.scripts}/index.js`)
		.pipe(plumber(getPluginOptions('plumber')))
		.pipe(webpackStream(getPluginOptions('webpackStream')))
		.pipe(isProduction ? uglify(getPluginOptions('uglify')) : gutil.noop())
		.pipe(gulp.dest(PATHS.build.scripts));
});
