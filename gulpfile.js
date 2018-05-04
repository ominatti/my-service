const gulp = require('gulp');
const run = require('gulp-run');
const serverlessGulp = require('serverless-gulp');
const argv = require('yargs').argv;
const util = require('gulp-util');

const paths = {
  serverless: ['./serverless.yml']
};

// npm install-serverless-global
gulp.task('install-serverless-global', installServerlessGlobal);

// npm run deploy -- --stage <stage>
gulp.task('deploy-service', deployService);

// npm run remove -- --stage <stage>
gulp.task('remove', () => {
  gulp.src(paths.serverless, { read: false })
    .pipe(serverlessGulp.exec('remove', { stage: 'dev' }));
});

function installServerlessGlobal(cb) {
    run(`npm install -g serverless`, { verbosity: 3 }).exec(() => {
        cb();
    });
}

function deployService(cb) {
    run(`sls deploy -y --stage ${argv.stage}`, { verbosity: 3 }).exec(() => {
        cb()
    });
}
