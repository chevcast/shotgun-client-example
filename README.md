## shotgun-client-example

This is an example application using shotgun and shotgun-client to create a realtime web terminal in Express.

### The Code

Adding shotgun and shotgun-client to express is simple. After generating your default Express application simply modify the last portion of app.js to look like this:

    // Get reference to the created server.
    var server = http.createServer(app).listen(app.get('port'), function(){
      console.log("Express server listening on port " + app.get('port'));
    });
    
    // Require shotgun and shotgun-client then create a new shell.
    var shotgun = require('shotgun'),
        shotgunClient = require('shotgun-client'),
        shell = new shotgun.Shell();
    
    // Use shotgun-client to wire up the server and shell.
    shotgunClient.attach(server, shell);
    
Next add a reference to the client script in your layout file.

    // layout.jade
    
    doctype 5
    html
      head
        title= title
        link(rel='stylesheet', href='/stylesheets/style.css')
        script(type='text/javascript', src='//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js')
        script(type='text/javascript', src='/shotgun/shotgun.client.js')
      body
        block content
        
Finally, use the jQuery adapter to create a console.

    // index.jade
    
    extends layout

    block content
        script(type='text/javascript')
            $(function () {
                $('body').shotgunConsole();
            });
