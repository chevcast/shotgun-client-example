
/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    path = require('path');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

app.get('/', function(req, res){
    res.render('index', { title: 'Express' });
});

// Get reference to the created server.
var server = http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
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
