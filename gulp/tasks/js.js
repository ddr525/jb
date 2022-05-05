import webpack from 'webpack-stream'

export const js = () => {
    return app.gulp.src([
        app.path.src.js__index, 
        app.path.src.js__table, 
        app.path.src.js__login,
        app.path.src.js__adminPanel
    ], 
        {sourcemaps: app.isDev}
        )
        .pipe(webpack({
            mode: app.isBuild ? 'production' : 'development',
            entry: {
                app: app.path.src.js__index,
                table: app.path.src.js__table,
                login: app.path.src.js__login,
                admin: app.path.src.js__adminPanel
            },
            output: {
                filename: '[name].js',
            },
            /*module: {
                rules: {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['babel-preset-env']
                        }
                    }
                }
            }*/
        }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream())
}