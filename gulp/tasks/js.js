import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import getWebpackConfig from'../../webpack.config.js';

export const js = (done) => {
    app.gulp.src(app.path.src.js)
        .pipe(webpackStream(getWebpackConfig(), webpack))
        .on("error", function (e) {
            console.log(e.message);
            this.emit("end");
        })
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());

    done();
};