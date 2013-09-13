exports.description = 'Allows a user to authenticate to the system with the supplied credentials.';

exports.usage = '[username] [password]';

exports.options = {
    username: {
        noName: true,
        required: true,
        prompt: 'Enter your username.',
        description: 'Your username.'
    },
    password: {
        noName: true,
        required: true,
        prompt: 'Enter your password.',
        description: 'Your password.',
        password: true
    }
};

exports.invoke = function (options, shell, done) {
    if (options.username.toLowerCase() === 'charlie' && options.password === 'password123')
        this.log('Success!');
    else
        this.error('Username or password incorrect.');
    done();
};