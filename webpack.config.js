const webpack=require('webpack');
const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

/*一入口，一出口*/
// module.exports = {
// 	entry:'./src/index.js',/*入口文件*/
// 	output:{
// 		path:path.resolve(__dirname,'dist'),
// 		filename:'bundle.js'/*表示输出的js文件名*/
// 	}
// }

/*多入口，一出口*/
// module.exports = {
// 	entry:['./src/index.js','./src/es6.js'],/*入口文件 entry为数组，则多入口一出口*/
// 	output:{
// 		path:path.resolve(__dirname,'dist'),
// 		filename:'bundle.js'/*表示输出的js文件名*/
// 	}
// }

/*多入口，多出口*/
// module.exports = {
// 	entry:{ //多入口
// 		index:'./src/index.js',
// 		es6:'./src/es6.js'
// 	},
// 	output:{
// 		path:path.resolve(__dirname,'dist'),
// 		filename:'[name]-bundle.js'/*表示输出的js文件名*/
// 	}
// }

/*插件*/
module.exports = {
	entry:{ //多入口
		index:'./src/index.js',
		es6:'./src/es6.js'
	},
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'[name]-bundle.js'/*表示输出的js文件名*/
	},
	plugins: [
		new HtmlWebpackPlugin({
			template:'./src/index.html',
			hash:true,
			title:"zhangsan",
			minify:{//压缩
				collapseWhitespace:true
			},
			// 选择包含的文件，选你需要的
			chunks:['es6']
		}),
		new HtmlWebpackPlugin({
			filename:'index2.html',
			template:'./src/index2.html',
			hash:true,
			title:"lisi",
			minify:{//压缩
				collapseWhitespace:true
			},
			// 选择包含的文件，选你需要的
			chunks:['index']
		})
	],
	module: {
	    rules: [
	      {
	        test: /\.css$/,
	        use: [
	          { loader: "style-loader" },
	          { loader: "css-loader" }
	        ]
	      }
	    ]
	  },
	  devServer:{
	  	contentBase:path.join(__dirname,"dist"),
	  	compress:true,//开始gzip模式
	  	port:9000,//服务端口号
	  	watchOptions:{//监听模式自动刷新
	  		poll:true
	  	}
	  }

}
