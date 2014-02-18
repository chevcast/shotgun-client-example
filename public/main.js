$(function () {
    // JQuery shells
    $('#shell1').shotgunConsole({ namespace: 'shell1' }).execute('intro');
    $('#shell2').shotgunConsole({ namespace: 'shell2' }).execute('intro');

    // Angular shells are found in the markup.
});
