import express from 'express';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.js';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

//Routes
import indexRoute from './routes/routes';

//conection DB
import './config/connectiondb';

const app = express();
const compiler = webpack(webpackConfig);

//settings
app.set('port', process.env.PORT || 5000);

//middlleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    filename: 'bundle.js',
    stats: {
        colors: true
    },
    historyApifallback: true
}));
app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

//routes 
app.use('/api', indexRoute);

//static files
//app.use(express.static('dist'));

//start server
app.listen(app.get('port'), () => 
    console.log(`Server run on port: ${app.get('port')}`)
);