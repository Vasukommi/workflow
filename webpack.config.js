const HtmlWebpackPlugin = require("html-webpack-plugin");
const moduleFedration = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: 'development',
    devServer: {
        hot: true,
        port: 3000,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new moduleFedration({
            name: 'shell',
            filename: 'remoteEntry.js',
            remotes: {
                printavo: 'printavo@http://localhost:3001/remoteEntry.js',
            },
            exposes: {
                "./root": './src/bootloader.js',
            },
            shared: {
                react: {
                    requiredVersion: "^18.2.0",
                    import: 'react',
                    shareKey: 'react',
                    shareScope: 'default',
                    singleton: true,
                },
                'react-dom': {
                    requiredVersion: "^18.2.0",
                    singleton: true,
                }
            },
        })
    ]
}