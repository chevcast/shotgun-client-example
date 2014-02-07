exports.description = "Displays all of the cookies currently stored in your browser.";

exports.invoke = function (shell) {
    shell.log();
    shell.getAllCookies(function (cookies) {
        var hasCookies = false;
        for (var key in cookies) {
            if (cookies.hasOwnProperty(key)) {
                hasCookies = true;
                break;
            }
        }
        if (hasCookies) {
            shell.log("The following cookies have been set for this domain: ");
            shell.log();
            for (var key in cookies)
                if (cookies.hasOwnProperty(key))
                    shell.log(key + ": " + cookies[key]);
        } else
            shell.log("There are no cookies set for this domain.");

    });
};
