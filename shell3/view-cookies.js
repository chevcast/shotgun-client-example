exports.description = "Displays all of the cookies currently stored in your browser.";

exports.invoke = function (shell) {
    shell.log();
    var cookies = shell.getVar('cookies'),
        hasCookies = false;
    for (var key in cookies) hasCookies = true;
    if (hasCookies) {
        shell.log("The following cookies have been set for this domain: ");
        shell.log();
        for (var key in cookies) {
            shell.log(key + ": " + cookies[key]);
        }
    }
    else
        shell.log("There are no cookies set for this domain.");
};
