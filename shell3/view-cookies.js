exports.description = "Displays all of the cookies currently stored in your browser.";

exports.invoke = function (options, shell) {
    shell.log();
    var hasCookies;
    for (var key in shell.context.cookies) hasCookies = true;
    if (hasCookies) {
        shell.log("The following cookies have been set for this domain: ");
        shell.log();
        for (var key in shell.context.cookies) {
            shell.log(key.toUpperCase() + ": " + shell.context.cookies[key]);
        }
    }
    else
        shell.log("There are no cookies set for this domain.");
};
