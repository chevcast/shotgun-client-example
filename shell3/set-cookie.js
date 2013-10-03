exports.description = "Sets a cookie in the browser.";

exports.options = {
    name: {
        required: true,
        prompt: "Enter the name of the cookie.",
        hidden: true
    },
    value: {
        required: true,
        prompt: "Enter value to store in the cookie.",
        hidden: true
    },
    days: {
        required: true,
        prompt: "Enter the number of days before the cookie expires.",
        hidden: true
    }
};

exports.invoke = function (shell, options) {
    shell.setCookie(options.name, options.value, options.days);
    shell.log("Cookie \"" + options.name + "\" was created successfully.");
}