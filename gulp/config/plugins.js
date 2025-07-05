import browsersync from 'browser-sync';
import newer from 'gulp-newer';
import ifPlugin from 'gulp-if';
import plumberError, {plumberStop} from "../helpers/plumberError.js";

export const plugins = {
    plumberError: plumberError,
    plumberStop: plumberStop,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin,
};