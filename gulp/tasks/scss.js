import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import gcmq from 'gulp-group-css-media-queries';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';

const sass = gulpSass(dartSass);

const scssBuild = (done) => {
    app.gulp.src(app.path.src.scss)
        .pipe(
            app.plugins.if(
                app.isDev,
                sourcemaps.init()
            )
        )
        .pipe(
            app.plugins.if(
                app.isDev,
                app.plugins.plumberError({title: 'SCSS'})
            )
        )
        .pipe(
            sass.sync({
                outputStyle: 'expanded',
                importers: [new dartSass.NodePackageImporter()]
            }).on('error', sass.logError)
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                gcmq()
            )
        )
        .pipe(
            autoprefixer(
                {
                    grid: true,
                    cascade: true,
                }
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                cleanCSS()
            )
        )
        .pipe(
            rename(
                {
                    extname: '.min.css',
                }
            )
        )
        .pipe(
            app.plugins.if(
                app.isDev,
                sourcemaps.write()
            )
        )
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());

    done();
};

export const scss = scssBuild;