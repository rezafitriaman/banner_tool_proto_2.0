const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync').create();
const watchify = require("watchify");
const fancy_log = require("fancy-log");
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const fs = require('fs');
const spawn = require('child_process').spawn;
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const watch = require('gulp-watch');

/*
------------------------------
SRC PATH
------------------------------
*/
const srcPaths = {
    appIndex: ['./src/app/*.html'], // all html files
    scss:['./src/app/*.scss', 
          './src/templates/**/*.scss'], // all scss files
    typescript: ['./src/app/*.ts'], // we dont use this yet
    appEngine:['./src/app/engine.ts'], // base on node js
    mainEntries: './src/app/main.ts', // main entries
    templatesHtml: ['./src/templates/rect/html/*.html', 
                    './src/templates/sky/html/*.html',
                    './src/templates/lead/html/*.html'], // template html for the banner
    img: ['./src/templates/rect/img/*', 
          './src/templates/sky/img/*',
          './src/templates/lead/img/*']
};

/*
------------------------------
DIST PATH
------------------------------
*/
const distPaths = {
    dist: ['./dist'], //dist map
    app: './dist/app', // app map engine.js inside
    templatesHtml: './dist/templates/html/' // all html template size gonna be inside
};

/*
------------------------------
NODE FILE PATH
------------------------------
*/
const nodeFile = {
    engine: ['./dist/app/engine.js'] //engine.js base on Nodejs
};

/*
------------------------------
NODE FILE PATH
------------------------------
*/
const vendorFile = {
    jquery: ['./node_modules/jquery/jquery.min.js'], // jquery
    bootstrap : ['./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', 
                './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map',
                './node_modules/bootstrap/dist/css/bootstrap.min.css',
                './node_modules/bootstrap/dist/css/bootstrap.min.css.map'],
    gsap: ['node_modules/gsap/src/minified/TweenMax.min.js']            
};


/*
------------------------------
WATCHED WITH BROWSERIFY
watch ts file such as main.ts
tsify it 
babelify it

PS: SOMEHOW HE WATCHED ALSO greet.js and other .ts file 
and not only main.ts
------------------------------
*/
const watchedBrowserify = watchify(
	browserify({
        basedir: '.',
        debug: true,
        entries: srcPaths.mainEntries,
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
	.transform('babelify', { presets: ['@babel/preset-env'], extensions: ['.ts']})
);

/*
------------------------------
BUNDLE
after babelify
name the file to bundle.js
save it in buffer
load sourcemaps
whrite sorcemap
send it to dist
stream to the browser and reload it
------------------------------
*/
const bundle = () => {
    return watchedBrowserify
      .bundle()
	    .pipe(source('bundle.js'))
	    .pipe(buffer())
	    .pipe(sourcemaps.init({loadMaps: true}))
	    .pipe(sourcemaps.write('./'))
	    .pipe(gulp.dest(distPaths.app)) // go to de app dist
	    .pipe(browserSync.stream());
};

/*
------------------------------
EXECUTE NODE-FILE
but first engine file must added to the dist 
------------------------------
*/
gulp.task('executeNode', ['app::engine'], function(done) {
  spawn('node', nodeFile.engine, { stdio: 'inherit' })
  setTimeout(function(){ browserSync.reload(); console.log('reload..............................') }, 2000);
  done();
});

/*
------------------------------
EXECUTE NODE-FILE AFTER ENGINE-FILE IS UPDATED
after html is sended to dist, execute node engine.js
reload the browser manualy
------------------------------
*/
gulp.task('executeNode::afterAppEngineWatch', ['app::engine'], function(done) {
  spawn('node', nodeFile.engine, { stdio: 'inherit' });
  setTimeout(function(){ browserSync.reload(); console.log('reload..............................') }, 2000);
  done();
});

/*
------------------------------
EXECUTE NODE-FILE AFTER ONE OF HTML-FILE IS UPDATED
after html is sended to dist, execute node engine.js
reload the browser manualy
------------------------------
*/
gulp.task('executeNode::afterAppIndexWatch', ['app::index'], function(done) {
  spawn('node', nodeFile.engine, { stdio: 'inherit' })
  setTimeout(function(){ browserSync.reload(); console.log('reload..............................') }, 2000);

  done();
});

/*
------------------------------
EXECUTE NODE-FILE AFTER ONE OF TEMPLATE FILES UPDATED
after TEMPLATE html is sended to dist, execute node engine.js
reload the browser manualy
------------------------------
*/
gulp.task('executeNode::afterTemplatesHtmlWatch', ['tempaltes::html'], function(done) {
  spawn('node', nodeFile.engine, { stdio: 'inherit' })
  setTimeout(function(){ browserSync.reload(); console.log('reload..............................') }, 2000);
  console.log(done)

  done();
});

/*
------------------------------
SASS
send sass file to dist
add plumber
add sorucemaps
add error log
add auto prefixer
send it to dist 
stream to browser and reload
------------------------------
*/
sass.compiler = require('node-sass');
gulp.task('app::sass', function () {
  return gulp.src(srcPaths.scss)
  	.pipe(plumber())
  	.pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
    	browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'android 4']
	}))
	.pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(distPaths.app)) // go to de app dist
    .pipe(browserSync.stream());
});
 
/*
------------------------------
APP HTML INDEX
send html file to dist
------------------------------
*/ 
gulp.task("app::index", function () {
    return gulp.src(srcPaths.appIndex)
        .pipe(gulp.dest(distPaths.app)) // go to de app dist
});

/*
------------------------------
TEMPLATE HTML BANNERS
send html template file to dist template
------------------------------
*/ 
gulp.task("tempaltes::html", function () {
    return gulp.src(srcPaths.templatesHtml)
        .pipe(gulp.dest(distPaths.templatesHtml)) // go to de app dist
});

/*
------------------------------
IMG
send IMG template file to dist
------------------------------
*/ 
gulp.task("tempaltes::img", function () {
    return gulp.src(srcPaths.img)
        .pipe(gulp.dest(distPaths.app)) // go to de app dist
});

/*
------------------------------
ENGINE
engine.js is file base on nodejs
send engine file to dist

engine-file is the one who has 
responsibility adding html-template to main-html

engine.js come from tsconfig.json = files
------------------------------
*/
gulp.task("app::engine", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(distPaths.app)) // go to de app dist
});

/*
------------------------------
VENDOR JQYERY
add jquery to the app folder
------------------------------
*/
gulp.task("app::jquery", function () {
     return gulp.src(vendorFile.jquery)
        .pipe(gulp.dest(distPaths.app)) // go to de app dist
});

/*
------------------------------
VENDOR BOOTSTRAP
add bootstrap to the app folder
------------------------------
*/
gulp.task("app::bootstrap", function () {
     return gulp.src(vendorFile.bootstrap)
        .pipe(gulp.dest(distPaths.app)) // go to de app dist
});

/*
------------------------------
VENDOR GSAP
add GSAP to the app folder
------------------------------
*/
gulp.task("app::gsap", function () {
     return gulp.src(vendorFile.gsap)
        .pipe(gulp.dest(distPaths.app)) // go to de app dist
});


/*
------------------------------
SERVE BROWSERSYNC
start browser - with local host
------------------------------
*/
gulp.task('serve', ['executeNode'], function() {
    browserSync.init({
        server: {
			baseDir: distPaths.app,
			/*directory: true,*/	//show directory
			proxy: "grqbge-nwx7013:3000"
		}
    });

    /*
    ------------------------------
    WATCH
    with gulp.watch - the normal one
    ------------------------------
    */
    gulp.watch(srcPaths.appEngine, ['executeNode::afterAppEngineWatch']);
    gulp.watch(srcPaths.appIndex, ['executeNode::afterAppIndexWatch']);

    /*
    ------------------------------
    PLUGIN WATCH
    - watch with extern plugin so u can watch a new or deleted file
    - the html template is dynamic html file, u can add and delete file 
    and u dont have to restrart gulp 
    ------------------------------
    */
    watch(srcPaths.templatesHtml, function() {
        gulp.start('executeNode::afterTemplatesHtmlWatch');
    });
    watch(srcPaths.scss, function() {
        gulp.start('app::sass');
    });

});

/*
------------------------------
DEFAULT
------------------------------
*/
gulp.task("default", ['serve', 'tempaltes::html', 'tempaltes::img', 'app::sass', 'app::bootstrap', 'app::jquery', 'app::gsap'], bundle);


/*
------------------------------
WATCH WITH BROWSERFIFY
------------------------------
*/
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", fancy_log); 


/*, 'tempaltes::html', 'sass', 'executeNode'*/