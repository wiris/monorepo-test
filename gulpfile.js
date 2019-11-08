const { series, src } = require('gulp');
const { exec} = require('child_process');
const argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const async = require('async');

const packages = 'packages';
const editorsAllowed = [
    // 'froala',
    // 'froala3',
    'tinymce4',
    // 'tinymce5',
    // 'ckeditor4',
    // 'ckeditor5',
]

/**
 * Returns the selected editors through the -e or --editors parameters
 */
function getEditors() {
    const editorsString = argv.editors || argv.e;
    const editors = editorsString.split(',');
    for (const editor of editors) {
        if (!editorsAllowed.includes(editor)) {
            throw new Error('No such editor "' + editor + '". Please specify the editor through the --editors parameter.');
        }
    }
    return editors;
}

function execOnEditors(cmd, cb) {
    return async.map(getEditors(), (editor) => exec(cmd, { cwd: path.join(packages, editor) }, (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    }));
}

function build(cb) {
    execOnEditors('npm run build', cb);
}

function test(cb) {
    execOnEditors('npm run test', cb);
}

function demo(cb) {
    execOnEditors('npm run demo', cb);
}

function publish(cb) {
    execOnEditors('npm run publish', cb);
}

function clean() {
    execOnEditors('npm run clean', cb);
}

exports.build = build;
exports.test = series(build, test);
exports.demo = series(build, demo);
exports.publish = series(build, test, publish);
exports.clean = clean;
exports.default = build;