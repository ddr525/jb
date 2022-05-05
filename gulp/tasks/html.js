import fileInclude from 'gulp-file-include'

export const html = () => {
    return app.gulp.src(app.path.src.html)
    .pipe(fileInclude())    
    .pipe(app.plugins.replace(/@images\//g, 'img/'))
    .pipe(app.plugins.replace(/@scripts\//g, 'js/'))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())
}