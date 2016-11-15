var gulp = require("gulp");
var gutil = require("gulp-util");
var open = require("open");
var del = require("del");
var env = require('gulp-env');
var gulpSequence = require('gulp-sequence');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

const DEV_PORT=4000,PRO_PORT=8400;

gulp.task("server", function(callback) {

    var config = require("./webpack.config.js");
    config.entry.app.unshift("webpack/hot/dev-server");
    config.entry.app.unshift("webpack-dev-server/client?http://localhost:"+DEV_PORT);
    var compiler = webpack(config);

    new WebpackDevServer(compiler, {
        hot: true,
        quiet: false,
  		noInfo: false,
      historyApiFallback: true,
  		publicPath: config.output.publicPath,
        proxy: {
          '/api/*': {
            target: 'http://45.32.88.92/',
            rewrite: function(req) {
                 req.url = req.url.replace(/^\/api/, '');
               }
          }
        },
        stats: { colors: true }
    }).listen(DEV_PORT, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:"+DEV_PORT+"/webpack-dev-server/index.html");
        open("http://localhost:"+DEV_PORT);
    });
});

gulp.task("webpack", function(callback) {
	var config = require("./webpack.config.js");
    webpack(config, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task("clean",function(){
	del.sync(['./dist/*']);
});

gulp.task('build',function(cb){
	gulpSequence('clean','env','webpack')(cb);
});

gulp.task('env',function(){
	const envs = env.set({
	    NODE_ENV: 'production',
      PUBLICPATH:'PRO'
	});
});
