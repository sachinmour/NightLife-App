var path = require("path");

module.exports = {
    devtool: 'eval-source-map',
    entry: ["webpack-hot-middleware/client", "webpack/hot/only-dev-server","./app/App.js"],
    output: {
        path: path.join(__dirname, '/'),
        publicPath: "/",
        filename: "public/bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    }
}