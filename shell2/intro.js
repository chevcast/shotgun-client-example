exports.hidden = true;
exports.invoke = function (shell) {
    shell.log("Example 2: This shell includes an \"echo\" command as well as a custom \"clear\" command that overrides the default clear command.");
    shell.log();
    shell.log("Type \"help\" to see the available commands.");
};
