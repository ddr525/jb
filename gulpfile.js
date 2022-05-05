import gulp from "gulp"
import browserSync from "browser-sync"
import { path } from "./gulp/config/path.js"
import { plugins } from "./gulp/config/plugins.js"
//Tasks
import { adminPanel } from "./gulp/tasks/adminPanel.js"
import { copy } from "./gulp/tasks/copy.js"
import { html } from "./gulp/tasks/html.js"
import { js } from "./gulp/tasks/js.js"
import { reset } from "./gulp/tasks/reset.js"
import { scss } from "./gulp/tasks/scss.js"
import { server } from "./gulp/tasks/server.js"


global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path,
    gulp,
    plugins
}
function watcher() {
    gulp.watch(path.watch.adminPanel, adminPanel)
    gulp.watch(path.watch.img, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.js, js)
}

const mainTasks = gulp.parallel(copy, html, scss, js, adminPanel)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)

export {dev}
export {build}

gulp.task('default', dev)