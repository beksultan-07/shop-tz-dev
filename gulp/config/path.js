// Получение имени папки
import * as nodePath from 'path';

const ROOT_FOLDER = nodePath.basename(nodePath.resolve());

const BUILD_FOLDER = './dist';
const SRC_FOLDER = './src';

export const PATH = {
  build: {
    js: `${BUILD_FOLDER}/js/`,
    css: `${BUILD_FOLDER}/css/`,
    html: `${BUILD_FOLDER}/`,
    images: `${BUILD_FOLDER}/img/`,
    fonts: `${BUILD_FOLDER}/fonts/`,
    files: `${BUILD_FOLDER}/files/`,
  },
  src: {
    js: `${SRC_FOLDER}/js/app.js`,
    images: `${SRC_FOLDER}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${SRC_FOLDER}/img/**/*.svg`,
    sass: `${SRC_FOLDER}/sass/style.sass`,
    html: `${SRC_FOLDER}/*.html`,
    files: `${SRC_FOLDER}/files/**/*.*`,
    svgIcons: `${SRC_FOLDER}/svgicons/*.svg`,
  },
  watch: {
    js: `${SRC_FOLDER}/js/**/*.js`,
    sass: `${SRC_FOLDER}/sass/**/*.sass`,
    html: `${SRC_FOLDER}/**/*.html`,
    images: `${SRC_FOLDER}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    files: `${SRC_FOLDER}/files/**/*.*`,
  },
  clean: BUILD_FOLDER,
  buildFolder: BUILD_FOLDER,
  srcFolder: SRC_FOLDER,
  rootFolder: ROOT_FOLDER,
  ftp: ``, // название папки на сервере
};