import fileInclude from 'gulp-file-include'

export const adminPanel = () => {
    return app.gulp.src(app.path.src.adminPanel)
    .pipe(fileInclude())    
    .pipe(app.plugins.replace(/@images\//g, 'img/'))
    .pipe(app.plugins.replace(/@scripts\//g, 'js/'))
    .pipe(app.gulp.dest(app.path.build.adminPanel))
    .pipe(app.plugins.browsersync.stream())
}