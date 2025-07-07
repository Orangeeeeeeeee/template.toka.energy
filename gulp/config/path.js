import * as path from 'path';
const rootFolder = path.basename(path.resolve());
const buildFolder = path.join('dist');
const srcFolder = path.join('src');

export const pathConfig = {
    build: {
        icons: path.join(buildFolder, 'icons'),
        img: path.join(buildFolder, 'img'),
        js: path.join(buildFolder, 'js'),
        css: path.join(buildFolder, 'css'),
        html: path.join(buildFolder),
        fonts: path.join(buildFolder, 'fonts'),
    },
    src: {
        svgMulti: path.join(srcFolder, 'svg-icons', 'multi', '*.svg'),
        svgMono: path.join(srcFolder, 'svg-icons', 'mono', '*.svg'),
        img: path.join(srcFolder, 'img', '**', '*.{jpg,jpeg,png,gif,svg}'),
        js: path.join(srcFolder, 'js', 'index.js'),
        scss: path.join(srcFolder, 'scss', '**', '[^_]*.scss'),
        html: path.join(srcFolder, 'njk', '[^_]*.njk'),
        fonts: path.join(srcFolder, 'fonts', '**', '*.{woff,woff2}'),
    },
    watch: {
        svgMulti: path.join(srcFolder, 'svg-icons', 'multi', '*.svg'),
        svgMono: path.join(srcFolder, 'svg-icons', 'mono', '*.svg'),
        img: path.join(srcFolder, 'img', '**', '*.{jpg,jpeg,png,gif,svg}'),
        js: path.join(srcFolder, 'js', '**', '*.js'),
        scss: path.join(srcFolder, 'scss', '**', '*.scss'),
        html: path.join(srcFolder, 'njk', '**', '*.njk'),
        fonts: path.join(srcFolder, 'fonts', '**', '*.{woff,woff2}'),
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    njkFolder: path.join(srcFolder, 'njk'),
    scssMixinsFolder: path.join(srcFolder, 'scss', 'mixins'),
}