var gulp = require('gulp');
var browserify = require('browserify');
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var plumber = require('gulp-plumber');
var less = require('gulp-less');
var csso = require('gulp-csso');
var watch = require('gulp-watch');
var envify = require('envify');
var reactify = require('reactify');
var uglifyify = require('uglifyify');
var nodemon = require('nodemon');
var browserSync = require('browser-sync');
var gutil = require('gulp-util');
var bust = require('gulp-buster');
var uglify = require('gulp-uglify');
var gStreamify = require('gulp-streamify');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var react = require('gulp-react');
var csslint = require('gulp-csslint');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var streamqueue = require('streamqueue');
var openWebpage = require('open');
var svgmin = require('gulp-svgmin');

var production = process.env.NODE_ENV === 'production';

var dependencies = [
  'alt',
  'react',
  'react-dom',
  'react-router',
  'underscore'
];

function handleError(task) {
  return function(err) {
    gutil.log(gutil.colors.red(err));
    notify.onError(task + ' failed, check the logs..')(err);
  };
}


function styles() {
  var stream = gulp.src('app/stylesheets/main.less')
    .pipe(plumber())
    .pipe(less().on('error', handleError('Less')))
    .pipe(prefix())
    .pipe(csslint({
      'box-sizing': false,
      'universal-selector': false,
      'box-model': false,
      'overqualified-elements': false,
      'compatible-vendor-prefixes': false,
      'qualified-headings': false,
      'unique-headings': false,
      'font-sizes': false,
      'adjoining-classes': false
    }))
    .pipe(csslint.reporter(function(file) {
      if(!file.csslint.success) {
        handleError('csslint')(
          'There were ' + file.csslint.errorCount  + ' css linting errors');
        file.csslint.results.forEach(function(result) {
          gutil.log(gutil.colors.red('[csslint] ' + result.error.message+' on line '+result.error.line));
        });
      }
    }));


  if(production) {
    stream.pipe(csso());
  }

  return stream
    .pipe(gulp.dest('public/css'));
}



function scripts(watch) {
  var bundler, rebundle;
  bundler = browserify({
    basedir: __dirname,
    debug: !production,
    entries: 'app/main.js',
    cache: {},
    packageCache: {},
    fullPaths: watch
  });
  if(watch) {
    bundler = watchify(bundler);
  }

  bundler.transform(reactify);
  bundler.transform({global: true}, envify);

  if(production) {
    bundler.transform({global: true}, uglifyify);
  }

  rebundle = function() {
    var stream = bundler.bundle();
    stream.on('error', handleError('Browserify'));

    stream = stream.pipe(source('bundle.js'));

    if(production) {
      stream.pipe(gStreamify(uglify()));
    }

    return stream.pipe(gulp.dest('public/js'));
  };
  bundler.on('update', rebundle);
  return rebundle();
}


function startBrowserSync() {
  browserSync.init(null, {
    ports: {
      min: 3001,
      max: 3002
    }
  });
}

gulp.task('develop', ['move'], function () {
  nodemon({
    script: 'server.js',
    ext: 'html js',
    env: { 'NODE_ENV': 'development'},
    stdout: false,
    stderr: false,
    nodeArgs: ['--debug'],
    watch: ['/']
  });

  nodemon.on('restart', function (files) {
    gutil.log('[server] App restarted due to: ', gutil.colors.cyan(files));
  }).on('stdout', function(raw) {
    var msg = raw.toString('utf8');
    gutil.log('[server]', gutil.colors.green(msg));
    if(msg.indexOf('avisi-website has started') !== -1) {
      lintScripts();
      browserSync.reload();
    }
  }).on('stderr', function(err) {
    var msg = err.toString('utf8');

    // For some reason debugger attachment gets logged on 'stderr', so we catch it here...
    if (msg.indexOf('debugger listening on port') === 0) {
      gutil.log('[server]', gutil.colors.green(msg));
    } else {
      handleError('Node server')(msg);
    }
  });
});


gulp.task('less', function() {
  return styles();
});

gulp.task('scripts', function() {
  return scripts(false);
});

gulp.task('images', function() {
  return images();
});

gulp.task('watchScripts', function() {
  return scripts(true);
});

gulp.task('lint', function() {
  return lintScripts();
});


gulp.task('watchLintScripts', function() {
  gulp.watch('/**/*.js', ['lintScripts']);
});

gulp.task('watchLess', function() {
  return watch({
    name: 'less',
    glob: 'app/**/*.less'
  }, function () {
    return styles()
      .pipe(browserSync.reload({
        stream:true
      }));
  });
});


gulp.task('browser-sync', ['develop'], function() {
  startBrowserSync();
  setTimeout(function() {
    openWebpage('http://localhost:3000');
  }, 3000);
});

gulp.task('build', ['move', 'scripts', 'less'], function() {
  return gulp.src([
    'assets/css/*.css',
    'assets/js/*.js'
  ]).pipe(bust('busters.json')).pipe(gulp.dest('./assets'));
});

gulp.task('default', ['watchScripts', 'watchLess', 'browser-sync']);