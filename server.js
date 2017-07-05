var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config");

// 启动服务
var compiler = webpack(webpackConfig);
var server = new webpackDevServer(compiler, {
	publicPath: webpackConfig.output.publicPath,
	// proxy: {
	// 	"/api/*": {
	// 		target: "https://cnodejs.org",
	// 		secure: false
	// 	}
	// },
	stats: {
		colors: true
	}
});

server.app.get("*", function(req, res) {
	res.sendFile(__dirname + '/index.html')
});

server.listen(8088, function() {
	console.log("Start success");
});