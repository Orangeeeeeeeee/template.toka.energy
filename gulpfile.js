import gulp from 'gulp';
import {pathConfig} from './gulp/config/path.js';
import {plugins} from './gulp/config/plugins.js';

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: pathConfig,
    gulp: gulp,
    plugins: plugins,
};

import {clear} from './gulp/tasks/clear.js';
import {njk} from './gulp/tasks/njk.js';
import {server} from './gulp/tasks/server.js';
import {scss} from './gulp/tasks/scss.js';
import {js} from './gulp/tasks/js.js';
import {img} from './gulp/tasks/img.js';
import {svgMono} from "./gulp/tasks/svg-icons.js";
import {zip} from "./gulp/tasks/zip.js";
import {fonts} from "./gulp/tasks/fonts.js";

const watcher = () => {
    gulp.watch(pathConfig.watch.html, njk);
    gulp.watch(pathConfig.watch.scss, scss);
    gulp.watch(pathConfig.watch.js, js);
    gulp.watch(pathConfig.watch.img, img);
    gulp.watch(pathConfig.watch.fonts, fonts);
}

const mainTasks = gulp.parallel(
    fonts,
    njk,
    scss,
    js,
    img,
    // svgMulti,
    svgMono
);

const dev = gulp.series(clear, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(clear, mainTasks);
const createZip = gulp.series(clear, mainTasks, zip);

const createSprites = gulp.series(
    clear,
    // svgMulti,
    svgMono,
);

export {
    dev,
    build,
    createZip,
    createSprites,
    clear
};

gulp.task('default', dev);