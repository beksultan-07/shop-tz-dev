// основной модуль
import gulp from "gulp";
// получаем пути
import { PATH } from "./gulp/config/path.js";
// общие плагины
import { plugins } from "./gulp/config/plugins.js";
// импорт задач
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { sass } from './gulp/tasks/sass.js';
import { javascript } from "./gulp/tasks/javascript.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { svgSpriteF } from "./gulp/tasks/svgSprite.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from './gulp/tasks/ftp.js';

global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  gulp: gulp,
  path: PATH,
  plugins: plugins,
};

// обработка шрифтов

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// отслеживание изменений файлов
function watcher() {
  gulp.watch(PATH.watch.files, copy);
  gulp.watch(PATH.watch.html, html);
  gulp.watch(PATH.watch.sass, sass);
  gulp.watch(PATH.watch.js, javascript);
  gulp.watch(PATH.watch.images, images);
}

export { svgSpriteF };

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, sass, javascript, images));

// сценарии выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// экспорт сценариев
export { dev };
export { build };
export { deployZIP };
export { deployFTP };

// выполнения сценария по дефолту
gulp.task('default', dev);