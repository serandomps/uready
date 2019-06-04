var serand = require('serand');

var pending;

var ready = false;

serand.on('user', 'ready', function (token) {
    ready = true;
    if (!pending) {
        return;
    }
    setTimeout(pending, 0);
});

module.exports = function (ctx, next) {
    if (ready) {
        return next();
    }
    pending = next;
};
