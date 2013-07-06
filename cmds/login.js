exports.description = 'Allows a user to authenticate to the system with the supplied credentials.';

exports.usage = '[username] [password]';

exports.options = {
    username: {
        nodash: true,
        prompt: 'Enter your username.',
        description: 'Your username.'
    },
    password: {
        nodash: true,
        prompt: 'Enter your password.',
        description: 'Your password.'
    }
};

exports.invoke = function (options, shell) {
    if (options.username.toLowerCase() === 'charlie' && options.password === 'password123')
        this.log('Success!');
    else
        this.error('Username or password incorrect.');
};