import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const APP_BASE = process.cwd();
const SOURCE_DIR = 'src';
const APP_SRC = path.resolve(APP_BASE, SOURCE_DIR);
const BUILD_DIR = 'build';
const ENTRY_FILENAME = 'index.js';
const OUTPUT_FILENAME = 'index.js';

const config = {
    entry: path.resolve(APP_SRC, ENTRY_FILENAME),

    output: {
        path: path.resolve(APP_BASE, BUILD_DIR),
        filename: OUTPUT_FILENAME,
        library: 'jss',
        libraryTarget: 'umd',
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js$/,
                include: APP_SRC,
                use: 'babel-loader',
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
    ],
};

export default config;
