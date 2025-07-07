import imageMin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';

export const img = () => {
    return app.gulp.src(app.path.src.img, {sourcemaps: true, encoding: false})
        .pipe(app.plugins.newer(app.path.build.img))
        .pipe(
            app.plugins.if(
                app.isDev,
                app.plugins.plumberError({title: 'IMAGE'})
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                imageMin(
                    [
                        gifsicle({interlaced: true}),
                        mozjpeg({quality: 75, progressive: true}),
                        optipng({optimizationLevel: 4}),
                        svgo({
                            plugins: [
                                {
                                    name: 'preset-default',
                                }
                            ]
                        })
                    ],
                    {
                        verbose: true,
                    }
                )
            )
        )
        .on("error", function (e) {
            console.log(e.message);
            this.emit("end");
        })
        .pipe(app.gulp.dest(app.path.build.img))
        .pipe(app.plugins.browsersync.stream());
};
