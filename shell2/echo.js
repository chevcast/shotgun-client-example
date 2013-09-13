exports.description = 'Displays the supplied text for a specified number of times.';

exports.usage = '<message> [options]';

exports.options = {
    message: {
        noName: true,
        required: true,
        description: 'The message to be displayed.'
    },
    iterations: {
        aliases: ['i'],
        required: true,
        default: 1,
        description: 'The number of times to display the message.',
        validate: /^[1-9]\d*$/
    }
};

exports.invoke = function (options, shell, done) {
    for (var count = 0; count < options.iterations; count++)
        this.log(options.message);
    done();
};