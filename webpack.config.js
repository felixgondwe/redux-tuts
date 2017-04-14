const path = require('path');
const html_wp_plugin = require('html-webpack-plugin');
const html_wp_plugin_config = new html_wp_plugin({
    template:__dirname + '/src/client/index.html',
    filename:'index.html',
    inject:'body'
});
const config = 
{
    context: __dirname + "/src",
    entry:"./client/app.js",
    output:{
        filename:"bundle.js",
        path:__dirname + "/dist"
    },
    resolve:{
        extensions:['','.js','.jsx','.json']
    },
    module:{
        rules:[
            {test:/\.jsx?$/,exclude:/node_modules/, use:'babel-loader'}
        ]
    },
    plugins:[html_wp_plugin_config]
};
module.exports = config; 