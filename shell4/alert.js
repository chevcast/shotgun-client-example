// A short description of what this command module does. Displayed in help.
exports.description = "Fires a custom event that is handled on the client page to show an alert.";

// The options this command understands.
exports.options = {
    message: {
        aliases: ['msg', 'm'],
        prompt: true,
        default: 'Hello, world!'
    }
};

// The function that should run when the command is invoked.
exports.invoke = function (shell, options) {
    shell.log('Showing message in alert...');
    shell.emit('showAlert', options.message, function () {
        // Callback is invoked by the client, sending a realtime
        // response so we know the alert box was closed by the user.
        shell.log("Alert was closed :)");
    });
};
