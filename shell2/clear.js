exports.description = "This clear command overrides the default clear command.";

exports.invoke = function (shell, options) {
    shell.clear();
    shell.log("Display cleared.");
};
