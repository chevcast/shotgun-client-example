var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', express.Router().get('/', function (req, res) {
    res.render('index', { title: 'shotgun-client-example' });
}));

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var server = app.listen(3000, function () {
    console.log("Listening at http://localhost:3000");
});

// Require shotgun and shotgun-client then instantiate four shells.
var shotgun = require('shotgun'),
    shotgunClient = require('shotgun-client');

var shell1 = new shotgun.Shell({
    namespace: 'shell1',
    cmdsDir: 'shell1',
    defaultCmds: {
        exit: false
    },
    debug: true
});

var shell2 = new shotgun.Shell({
    namespace: 'shell2',
    cmdsDir: 'shell2',
    defaultCmds: {
        exit: false
    },
    debug: true
});

var shell3 = new shotgun.Shell({
    namespace: 'shell3',
    cmdsDir: 'shell3',
    debug: true
});

var shell4 = new shotgun.Shell({
    namespace: 'shell4',
    cmdsDir: 'shell4',
    defaultCmds: {
        exit: false
    },
    debug: true
});

// Use shotgun-client to wire up the server and shell.
shotgunClient.attach(server, shell1, shell2, shell3, shell4);
