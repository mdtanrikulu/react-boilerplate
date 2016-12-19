var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/main'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'],
            include: path.join(__dirname, 'src')
        },
            {
                // Test expects a RegExp! Note the slashes!
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
                // Include accepts either a path or an array of paths.
                include: path.join(__dirname, 'src/scss')
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf|png)([\?]?.*)$/,
                loader: "file-loader"
            }]
    }
};
