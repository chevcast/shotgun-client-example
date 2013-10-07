exports.description = "This clear command overrides the default clear command.";

exports.invoke = function (shell, options) {
    shell.clearDisplay(true);
    shell.log("Display cleared and context reset.");
};