const path=require(`path`);
const HtmlWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin} =require('clean-webpack-plugin');
const { webpack } = require('webpack');
module.exports={
    entry:{
        // app:'./src/index.js',
        // another:'./src/another-module.js'
       // print:'./src/print.js'
       app:{
        import:'./src/index.js',
        dependOn:'shared'
       },
       another:{
        import:'./src/another-module.js',
        dependOn:'shared'
       },
       shared:'lodash'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.html$/,
                use:['html-loader']
            }
        ]
    },
    devtool:`inline-source-map`,
    devServer:{
        static:{
            directory:path.join(__dirname,"dist"),
        },
        compress: true,
        port: 9000,
        hot: true
    },
    plugins:[
   // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
        {
            title:'Output Management',
            template:'./src/public/index.html'
        }
    )
 
    ],
    output:{
        filename:`[name].bundle.js`,
        path:path.resolve(__dirname,`dist`)
    },
    optimization:{
      runtimeChunk:'single',
    },
    mode:"production"
};