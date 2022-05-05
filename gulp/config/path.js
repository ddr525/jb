import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = '../weight-server'
const sourceFolder = './src'

export const path = {
    build: {
        adminPanel: `${buildFolder}/admin/`,
        html: `${buildFolder}/`,
        pages: `${buildFolder}/pages/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        img: `${buildFolder}/img/`,
    },
    src: {
        adminPanel: `${sourceFolder}/admin/*.*`,
        html: `${sourceFolder}/*.html`,
        pages: `${sourceFolder}/pages/*.html`,
        scss: `${sourceFolder}/scss/*.scss`,
        js__index: `${sourceFolder}/js/app.js`,
        js__table: `${sourceFolder}/js/table.js`,
        js__login: `${sourceFolder}/js/login.js`,
        js__adminPanel: `${sourceFolder}/js/admin.js`,
        img: `${sourceFolder}/img/*.*`,
    },
    watch: {
        adminPanel: `${sourceFolder}/admin/*.*`,
        img: `${sourceFolder}/img/*.*`,
        html: `${sourceFolder}/**/*.html`,
        scss: `${sourceFolder}/scss/styles/*.scss`,
        js: `${sourceFolder}/js/**/*.js`
    },
    clean: [
        `${buildFolder}**.html`,
        `${buildFolder}/pages/*.html`,
        `${buildFolder}/css/*.css`,
        `${buildFolder}/js/*.js`,
        `${buildFolder}/img/*.*`,
    ],
    buildFolder,
    sourceFolder,
    rootFolder,
}