exports.hidden = true;
exports.invoke = function (shell) {
    shell.log("Example 1: This shell includes example command modules that use a custom context variable to maintain state between executions.");
    shell.log();
    shell.log("Type \"help\" to see the available commands.");
};
